const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const businessSchema = new Schema({
    category: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    business_name:{type: String, required: true},
    address:{type: String, required: true},
    city:{type: String, required: true},
    zip_code:{type: String, required: true},
    service:{type: String, required: true},
    phone_number:{type: String, required: true},
    discount:{type: Number},
    availability:
    [{ //business.availability.isBooked
        timeSlot:String,
        date:Date, 
        isBooked:{type:Boolean, default:false}
    }] ,
    user_booking:[{type: Schema.Types.ObjectId,ref:'Booking'}],
    initial_price:{type: Number},
    discounted_price:{type: Number},
    image_url: {type: String, required: true},
    description:{type: String},
    coordinates:[{type: Number }] 
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
})

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;