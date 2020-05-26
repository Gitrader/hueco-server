const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const businessSchema = new Schema({
    category: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    business_name:{type: String},
    address:{type: String},
    city:{type: String},
    zip_code:{type: String},
    service:{type: String},
    phone_number:{type: String},
    discount:{type: String},
    availability:[{type: Schema.Types.ObjectId,ref:'Slot'}],
    user_booking:[{type: Schema.Types.ObjectId,ref:'Booking'}],
    initial_price:{type: String},
    discounted_price:{type: String},
    image_url: {type: String},
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