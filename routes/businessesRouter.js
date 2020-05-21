const express = require("express");
const businessesRouter = express.Router();

const Business=require("../models/business");


// HELPER FUNCTIONS
const { isLoggedIn, isNotLoggedIn, validationLogin } = require("../helpers/middlewares");


// GET    '/businesses'
businessesRouter.get('/' ,(req, res, next) => {
  // const{id}=req.params;
  Business.find()
  .then((allBusinesses) => {
    res
    .status(200)
    .json(allBusinesses)
})
.catch((err) => {
res
.status(400)
.json(err)
});
})
 

// GET    '/businesses/:id'
businessesRouter.get('/:businessId' , (req, res, next) => {
  const{businessId}=req.params;
  Business.findById(businessId)
  .populate("user_booking")
  .then((specificBusiness) => {
    res
    .status(200)
    .json(specificBusiness)
})
.catch((err) => {
  res
  .status(400)
  .json(err)
  });
  })
 



// PUT   '/businesses/:id/add-hueco'
businessesRouter.put('/:businessId/add-hueco', isLoggedIn,  (req, res, next) => {
  const { 
    timeSlot,
    date
   } = req.body;
   const{businessId}=req.params

  Business.findByIdAndUpdate(businessId, { $push:{availability : {timeSlot, date}}}, {new:true})
    .then((businessUpdated)=> {
      res
      .status(200)
      .json(businessUpdated)
  })
  .catch((err) => {
    res
    .status(400)
    .json(err)
    });
    })


    // PUT   'businesses/:id/edit/:myhuecoId'
businessesRouter.put('/:id/edit/:myHuecoId', isLoggedIn,  (req, res, next) => {
  const {businessId,myHuecoId}= req.params
  const { availability } = req.body;

  Business.findByIdAndUpdate( businessId, {availability }, myHuecoId, { new: true } )
    .then((updatedTimeSlot)=> {
      res
      .status(200)
      .json(updatedTimeSlot)
  })
  .catch((err) => {
    res
    .status(400)
    .json(err)
    });
    })


    // DELETE        `/businesses/:id/delete/:myhuecoId`
businessesRouter.delete('/:id/delete/:myHuecoId',  isLoggedIn, (req, res, next) => {
  
  const {myHuecoId}= req.params

  Project
    .findByIdAndDelete(myHuecoId)
    .then((deletedHueco) => {
      res.status(202).json(deletedHueco)
    })
    .catch((err) => {
      res.status(500).json(err);
    });
})


module.exports = businessesRouter;
