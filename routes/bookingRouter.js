const express = require("express");
const bookingRouter = express.Router();

const Business=require("../models/business");
const Booking=require("../models/booking");





// POST   `/booking/contact-info`
bookingRouter.post('/contact-info', async (req, res, next) => {
  const { first_name,last_name,email,businessId,timeslot} = req.body;
try{
 const newBooking= await Booking.create({ first_name,last_name,email, business_id:businessId,timeslot})
    
const updatedBusiness= await Business.updateOne({_id:businessId},{$push:{user_booking:newBooking._id}},{new:true})

const updatedBusiness2= await Business.updateOne({_id:businessId},{$set:{"availability.$.isBooked":true}},{new:true})
    
    res
      .status(200)
      .json({newBooking,updatedBusiness})
}
  catch(err) {
    res
    .status(400)
    .json(err)
    }
  })


    // POST   `/booking/payment-information`
bookingRouter.put('/:bookingId/payment-information',  (req, res, next) => {
  const { bookingId } = req.params;
  const { cardholder_name, card_number, expiration_date,  cv_code} = req.body;

  Booking.findByIdAndUpdate(bookingId,{ cardholder_name, card_number, expiration_date,  cv_code},{ new: true })
   
  .then(( userPaymentInfo)=> {
      res
      .status(200)
      .json(userPaymentInfo)
  })
  .catch((err) => {
    res
    .status(400)
    .json(err)
    });
    })




// GET    '/booking/:bookingId'
bookingRouter.get('/:bookingId' , (req, res, next) => {
  const{bookingId}=req.params;
  Booking.findById(bookingId)
  .populate("business_id")
  .then((specificBooking) => {
    res
    .status(200)
    .json(specificBooking)
})
.catch((err) => {
  res
  .status(400)
  .json(err)
  });
  })


module.exports = bookingRouter;
