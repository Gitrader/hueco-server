const express = require("express");
const businessesRouter = express.Router();

const Business=require("../models/business");
const Slot=require("../models/slot");


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
 

// GET    '/businesses/:businessId'
businessesRouter.get('/:businessId' , (req, res, next) => {
  const{businessId}=req.params;
  Business.findById(businessId)
  .populate("user_booking availability")
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
businessesRouter.put('/:businessId/add-hueco', isLoggedIn,  async(req, res, next) => {
  console.log("REQBODY",req.body)
  const { 
    timeSlot,
    
   } = req.body;
   console.log("TIMESLOT",timeSlot)
   const{businessId}=req.params

   try {  const newSlot= await Slot.create({timeSlot, business_id:businessId});
console.log("new slot",newSlot)
   const businessUpdated= await Business.findByIdAndUpdate(businessId, {$push:{availability:newSlot._id}}, {new:true});
   res
   .status(200)
   .json(businessUpdated)
  
} catch (error) {
    res
    .status(400)
    .json(error)
    }
  })
  


    // PUT   'businesses/:id/edit/:myhuecoId'
businessesRouter.put('/:businessId/edit/:myHuecoId', isLoggedIn, async (req, res, next) => {
  const {myHuecoId}= req.params
  const { timeSlot} = req.body;

  try {
     const updatedTimeSlot= await Slot.findByIdAndUpdate(myHuecoId,{timeSlot})
     res
     .status(200)
     .json(updatedTimeSlot)
  } catch (error) {
    res
    .status(400)
    .json(error)
    };
  })
   
  

    


    // DELETE        `/businesses/:id/delete/:myhuecoId`
businessesRouter.delete('/:businessId/delete/:myHuecoId',  isLoggedIn,async (req, res, next) => {
  
  const {businessId,myHuecoId}= req.params

  try {
     await Slot.findOneAndRemove(myHuecoId)
    const businessUpdatedSlot=await Business.findByIdAndUpdate({_id:businessId},{$pull:{availability:myHuecoId}},{new:true})
    res.status(202).json(businessUpdatedSlot)
  } catch (error) {
    res.status(500).json(error);
  }

})


module.exports = businessesRouter;
