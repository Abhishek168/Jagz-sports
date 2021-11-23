import mongoose from 'mongoose';

const constant = require('../helpers/constants');

const Notifications = mongoose.Schema({
  userTo: { type: mongoose.Schema.ObjectId, ref: 'Users' }, // GURU or tour guide or business
  userFrom: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  bookingDetails: { type: mongoose.Schema.ObjectId, ref: 'Bookings' },
  type: { type: String },
  notificationStatus: { type: String, default: 'Unread' },
  notificationType: { type: Number, default: constant.BOOKING_STATUS.NONE },
  isDeleted: { type: Boolean, default: false },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Notifications', Notifications, 'Notifications');
