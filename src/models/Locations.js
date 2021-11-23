import mongoose from 'mongoose';

const Locations = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  placeId: { type: String, default: '' }, // from google
  addressPlaceId: { type: String, default: '' },
  latitude: { type: Number },
  longitude: { type: Number },
  country: { type: String, default: '' },
  state: { type: String, default: '' },
  city: { type: String, default: '' },
  streetAddress: { type: String, default: '' },
  zipCode: { type: String, default: '' },
  isPrimeLocation: { type: Boolean, default: false },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Locations', Locations, 'Locations');
