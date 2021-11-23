import mongoose from 'mongoose';

const Events = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  location: { type: mongoose.Schema.ObjectId, ref: 'Locations' },
  eventName: { type: String, default: '' },
  type: { type: String },
  startDateTime: { type: String, default: '' }, // from google
  endDateTime: { type: String, default: '' },
  link: { type: String, default: '' },
  amount: { type: Number, default: 0 },
  bikeType: {
    type: [{ type: Object }], default: [],
  },
  coverPhoto: { type: String, default: '' },
  description: { type: String, default: '' },
  invited: {
    type: [{ type: Object }], default: [],
  },
  going: {
    type: [{ type: Object }], default: [],
  },
  eventCategory: { type: String, default: '' },
  privacyType: { type: String, default: '' }, // public/private
  ridePreference: { type: [{ type: Object }], default: [] },
  isPaid: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Events', Events, 'Events');
