const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
    business_id: [{type: Schema.Types.ObjectId,ref:'Business'}],
    first_name: {type: String, required: true},
    last_name: {type: String, required:true},
    date :{type:Date, default: new (Date)},
    email: {type: String, required:true},
    timeslot:[]
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;