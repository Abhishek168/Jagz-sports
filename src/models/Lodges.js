import mongoose from 'mongoose';

const Lodges = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' }, // GURU or tour guide or business
  firstName: { type: String },
  lastName: { type: String },
  interestedIn: { type: String, default: '' },
  maxOccupants: { type: Number, default: 1 },
  accomodationType: { type: [{ type: Object }], default: [] },
  accomodationLocation: { type: String, default: '' },
  bikingPreference: { type: [{ type: Object }], default: [] },
  previousExperience: { type: [{ type: Object }], default: [] },
  bikeFriendlyAccomodation: { type: [{ type: Object }], default: [] },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Lodges', Lodges, 'Lodges');
