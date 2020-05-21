const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const slotSchema = new Schema({
    business_id: {type: Schema.Types.ObjectId,ref:'Business'},
    date: {type: Date, default:new Date()},
    timeSlot: {type:String},
    isBooked:{type:Boolean, default:false}
   
   
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
})

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;