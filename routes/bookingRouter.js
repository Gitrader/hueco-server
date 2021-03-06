const express = require("express");
const bookingRouter = express.Router();

const Business=require("../models/business");
const Booking=require("../models/booking");
const Slot=require("../models/slot");





// POST   `/:businessId/:timeslotId/contact-info`
bookingRouter.post('/contact-info', async (req, res, next) => {

  const { first_name,last_name,email,businessId,timeslotId} = req.body;
  console.log("timeslotID",timeslotId)
try{
 const newBooking= await Booking.create({ first_name,last_name,email, business_id:businessId,timeslot_id:timeslotId})
    
const updatedBusiness= await Business.findByIdAndUpdate(businessId,{$push:{user_booking:newBooking._id}},{new:true})

const updatedSlot= await Slot.findByIdAndUpdate(timeslotId,{$set:{isBooked:true}},{new:true}) 
    res
      .status(200)
      .json({newBooking,updatedBusiness,updatedSlot})
}
  catch(err) {
    res
    .status(400)
    .json(err)
    }
  })


    // PUT   `/booking/payment-information`
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
