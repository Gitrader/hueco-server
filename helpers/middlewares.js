const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  if (req.session.currentBusiness) next();
  else next(createError(401));
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentBusiness) next();
  else next(createError(403));
};

exports.validationLogin = (req, res, next) => {
  const { email, password } = req.body;

  

  if (!email || !password) next(createError(400));
  else next();
};


exports.validationSignUp = (req, res, next) => {
  const {  business_name, 
    email, 
    password,
    address,
    city,
    zip_code,
    service,
    phone_number,
    image_url,
    description,
    coordinates } = req.body;

  

  if (!email || !password) next(createError(400)); //ALL REQUIRED!!!!
  else next();
};
