import mongoose from 'mongoose';


const BookingHistories = mongoose.Schema({
  bookingId: { type: mongoose.Schema.ObjectId, ref: 'Bookings' },
  previousStatus: { type: Number, default: 0 },
  modifiedStatus: { type: Number },
  modifiedStatusDate: { type: Date },
  comments: { type: String, default: '' },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('BookingHistories', BookingHistories, 'BookingHistories');
