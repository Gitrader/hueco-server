const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const businessSchema = new Schema({
    category: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    business_name:{type: String, required: true},
    address:{type: String, required: true},
    city:{type: String, required: true},
    zip_code:{type: Number, required: true},
    service:{type: String, required: true},
    phone_number:{type: Number, required: true},
    discount:{type: Number, required: true},
    availability:[string],
    user_booking:[{type: Schema.Types.ObjectId,ref:'Booking'}],
    initial_price:{type: Number, required: true},
    discounted_price:{type: Number, required: true},
    image_url: {type: String, required: true},
    description:{type: String},
    coordinates:[coordinates] 
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
})

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;