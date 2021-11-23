import mongoose from 'mongoose';

const constant = require('../helpers/constants');

const Availabilities = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'Users' },
  availabilityType: { type: String },
  // common across profiles
  placeId: { type: String, default: '' }, // from google
  locationName: { type: String, default: '' },
  aboutlocation: { type: String, default: '' },
  price: { type: Number },
  groupSize: { type: Number, default: 5 },
  whatsIncludes: {
    type: [{ type: Object }], default: constant.WHATSINCLUDES,
  },
  duration: { type: Number },
  minDuration: { type: Number, default: 1 },
  maxDuration: { type: Number, default: 6 },
  latitude: { type: Number },
  longitude: { type: Number },
  bio: { type: String, default: '' },
  availableDaysAndTime: {
    type: [{ type: Object }], default: [],
  },
  // Tour and business tour fields
  tourName: { type: String, default: '' },
  tourExperience: { type: String, default: '' },
  meetingPlace: { type: Object, default: {} },
  tourDepaturePlace: { type: String, default: '' },
  tourSkills: { type: String },
  tourMaxBooking: { type: Number },
  itinerary: { type: Object, default: {} },
  availableDates: { type: [{ type: Object }], default: [] },
  tourTime: { type: [{ type: Object }], default: [] },
  tourDiscount: { type: Object, default: {} },
  cancellationPolicy: { type: String, default: '' },
  businessDocument: { type: String, default: '' },
  businessType: { type: String, default: '' },
  businessName: { type: String, default: '' },
  businessEmail: { type: String, default: '' },
  webURL: { type: String, default: '' },
  numberOfEMP: { type: String, default: '' },
  taxNumber: { type: String, default: '' },
  aboutBusiness: { type: String, default: '' },
  businessAddress: { type: String, default: '' },
  blockedDates: { type: [{ type: Object }], default: [] },
  // Organization fields
  organizationName: { type: String, default: '' },
  organizationEmail: { type: String, default: '' },
  organizationType: { type: String, default: '' },
  organizationAddress: { type: String, default: '' },
  files: {
    type: [], default: [],
  },
  rideCategory: {
    type: [{ type: Object }], default: constant.RIDECATEGORY_DEFAULT,
  },
  languages: {
    type: [{ type: Object }], default: constant.LANG_DEFAULT,
  },
  mtbSpeed: {
    type: [{ type: Object }], default: constant.MTBSPEED_DEFAULT,
  },
  mtbRidePreference: {
    type: [{ type: Object }], default: constant.MTBRIDEPREFERENCE_DEFAULT,
  },
  cyclingSpeed: {
    type: [{ type: Object }], default: constant.CYCLINGSPEED_DEFAULT,
  },
  cyclingPreference: {
    type: [{ type: Object }], default: constant.ROADRIDEPREFERENCE_DEFAULT,
  },
  highLights: {
    type: [], default: [],
  },
  cyclingDistance: {
    type: [{ type: Object }], default: constant.CYCLINGDISTANCE_DEFAULT,
  },
  interestedIn: {
    type: [{ type: Object }], default: constant.INTERESTEDIN_DEFAULT,
  },
  availableFor: {
    type: [{ type: Object }], default: constant.AVAILABLE_FOR_DEFAULT,
  },
  isActive: { type: Boolean, default: false },
  requiredFieldAvailable: { type: Boolean, default: false },
  showBanner: { type: Boolean, default: false },
  isBikeRental: { type: Boolean, default: false },
  bikeRentalDetails: {
    type: [{ type: Object }], default: [],
  },
  isPriority: { type: Boolean, default: false },
  dateCreate: { type: Date, default: Date.now },
  dateUpdate: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

export default mongoose.model('Availabilities', Availabilities, 'Availabilities');
