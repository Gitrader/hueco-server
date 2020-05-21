const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    business_id: [{type: Schema.Types.ObjectId,ref:'Business'}],
    first_name: {type: String},
    last_name: {type: String},
    date :{type:Date, default: new (Date)},
    email: {type: String},
    timeslot_id:{type: Schema.Types.ObjectId,ref:'Slot'},
    cardholder_name:{type:String},
    card_number:{type:String},
    expiration_date:{type:String},
    cv_code:{type:String}
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;