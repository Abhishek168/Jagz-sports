import mongoose from 'mongoose';

const constant = require('../helpers/constants');

const Bookings = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' }, // GURU or tour guide or business
  traveller: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  availability: { type: mongoose.Schema.ObjectId, ref: 'Availabilities' },
  bookingStatus: { type: Number, default: constant.BOOKING_STATUS.REQUESTED },
  selectedDate: { type: String },
  time: { type: String },
  duration: { type: Number, default: 0 },
  rideType: { type: String },
  rideCategory: {
    type: [{ type: Object }], default: constant.RIDECATEGORY_DEFAULT,
  },
  cost: { type: Number },
  payment: { type: Boolean, default: false },
  languages: { type: [{ type: Object }], default: [] },
  signature: { type: String },
  mtbSpeed: { type: [{ type: Object }], default: [] },
  mtbRidePreference: { type: [{ type: Object }], default: [] },
  cyclingSpeed: { type: [{ type: Object }], default: [] },
  cyclingPreference: { type: [{ type: Object }], default: [] },
  paymentMethodToken: { type: String, default: '' },
  totalRiders: { type: Number, default: 1 },
  additionalRiders: { type: [{ type: Object }], default: [] },
  isTravellerDeleted: { type: Boolean, default: false },
  isUserDeleted: { type: Boolean, default: false },
  channelUrl: { type: String },
  isBikeRental: { type: Boolean, default: false },
  bikeRentalDetails: {
    type: [{ type: Object }], default: [],
  },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Bookings', Bookings, 'Bookings');
