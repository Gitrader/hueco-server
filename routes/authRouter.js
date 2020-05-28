const express = require("express");
const authRouter = express.Router();

const createError = require("http-errors");

const bcrypt = require("bcrypt");
const saltRounds = 10;


const Business=require("../models/business");



// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin, validationSignUp } = require("../helpers/middlewares");

// POST   '/auth/signup'
authRouter.post('/signup', isNotLoggedIn, validationSignUp, (req, res, next) => {
  const { 
    business_name, 
    email, 
    password,
    address,
    city,
    zip_code,
    service,
    phone_number,
    image_url,
    description,
    coordinates
   } = req.body;

  Business.findOne({ email })
    .then((business) => {
      //  - check if the `buisiness` exists, if it does send a response with an error
      if (business) {
        return next(createError(400));
      }
      else {  //  - if `buisiness` is unique then:
        //     - encrypt the password using bcrypt
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        //     - create the new business in DB using the `buisiness` and the encrypted password
        Business.create({
        business_name, 
        email, 
        password: hashPass,
        address,
        city,
        zip_code,
        service,
        phone_number,
        image_url,
        description,
        coordinates
        })
          .then((newBusiness) => {
            //     - save the newly created business in the `session`
            newBusiness.password = "****";
            req.session.currentBusiness = newBusiness;
            //     - send back the response 201 (created) and the new business object
            res
              .status(201) // Created
              .json(newBusiness);

          })
          .catch((err) => next(createError(err)));
      }
    }).catch((err) => next(createError(err)));
})

// POST    '/auth/login'
authRouter.post('/login', isNotLoggedIn, validationLogin, (req, res, next) => {

  const { email, password } = req.body;
  Business.findOne({ email })
    .then((business) => {
      //  - check if business exists in the DB
      if (!business) {
        //  - if business doesn't exist - forward the error to the error middleware using `next()`
        return next(createError(404)); // Unathorized
      }
      else {
        //  - check if the password is correct
        const passwordCorrect = bcrypt.compareSync(password, business.password);
        if (passwordCorrect) {
          //  - if password is correct assign the business document to `req.session.currentBusiness`
          business.password = "****";
      
          
          req.session.currentBusiness = business;
          //  - send  json response
          res
            .status(200)
            .json(business);
        }
      }
    })
    .catch((err) => next(createError(err)));
})

// GET   '/auth/logout'
authRouter.get('/logout', isLoggedIn, (req, res, next) => {
  //  - check if the business is logged in using helper function (check if session exists)

  //  - destroy the session
  req.session.destroy(function (err) {
    if (err) next(createError(err));
    else {
      //  - set status code and send the response back
      res
        .status(204) // No Content
        .send();
    }
  })
})

// GET    '/auth/me'
authRouter.get('/me', isLoggedIn, (req, res, next) => {
  //  - check if the business IS logged in using helper function (check if session exists)

  //  - if yes, send the response with business info (available on req.session.currentBusiness)
  const currentBusinessSessionData = req.session.currentBusiness;
  res
    .status(200)
    .json(currentBusinessSessionData);
})

// GET    '/auth/myhueco'
authRouter.get('/myhueco', isLoggedIn, (req, res, next) => {
  //  - check if the business IS logged in using helper function (check if session exists)

  //  - if yes, send the response with business info (available on req.session.currentBusiness)
  const currentBusinessSessionData = req.session.currentBusiness;
  res
    .status(200)
    .json(currentBusinessSessionData);
})

module.exports = authRouter;

