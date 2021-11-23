import mongoose from 'mongoose';

const Transactions = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  booking: { type: mongoose.Schema.ObjectId, ref: 'Bookings' },
  transactionId: { type: String },
  date: { type: Date, default: Date.now },
  status: { type: Number },
  cost: { type: Number },
}, {
  versionKey: false,
});

export default mongoose.model('Transactions', Transactions, 'Transactions');
