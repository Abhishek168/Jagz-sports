const Joi = require('joi');

export const getAvailability = {
  body: {
    user: Joi.string().required(),
  },
};

export const getTourAvailability = {
  body: {
    user: Joi.string().required(),
  },
};

export const getGuruProfile = {
  body: {
    user: Joi.string().required(),
  },
};

export const getTourGuideProfile = {
  body: {
    user: Joi.string().required(),
  },
};

export const getBusinessTourGuideProfile = {
  body: {
    user: Joi.string().required(),
  },
};

export const getBusinessToursAvailabilities = {
  body: {
    user: Joi.string().required(),
  },
};

export const getToursAvailabilities = {
  body: {
    user: Joi.string().required(),
  },
};

export const addAvailability = {
  body: {
    placeId: Joi.string(),
    locationName: Joi.string(),
    price: Joi.number(),
    aboutlocation: Joi.string(),
    minDuration: Joi.number(),
    maxDuration: Joi.number(),
    availableDaysAndTime: Joi.array(),
    rideCategory: Joi.array(),
    languages: Joi.array(),
    mtbSpeed: Joi.array(),
    groupSize: Joi.number(),
    whatsIncludes: Joi.array(),
    mtbRidePreference: Joi.array(),
    cyclingSpeed: Joi.array(),
    cyclingPreference: Joi.array(),
    highLights: Joi.array(),
  },
};

export const editAvailability = {
  body: {
    availability: Joi.string().required(),
    placeId: Joi.string(),
    locationName: Joi.string(),
    aboutlocation: Joi.string(),
    name: Joi.string(),
    price: Joi.number(),
    rideCategory: Joi.array(),
    languages: Joi.array(),
    mtbSpeed: Joi.array(),
    mtbRidePreference: Joi.array(),
    cyclingSpeed: Joi.array(),
    cyclingPreference: Joi.array(),
    highLights: Joi.array(),
    minDuration: Joi.number(),
    maxDuration: Joi.number(),
  },
};

export const addTourAvailability = {
  body: {
    tourName: Joi.string().required(),
    placeId: Joi.string().required(),
    locationName: Joi.string(),
    aboutlocation: Joi.string().required(),
    price: Joi.number().required(),
    meetingPlace: Joi.object().required(),
    tourSkills: Joi.string().required(),
    rideCategory: Joi.array(),
    tourMaxBooking: Joi.number().required(),
    languages: Joi.array().required(),
    whatsIncludes: Joi.array().required(),
    itinerary: Joi.object().required(),
    availableDaysAndTime: Joi.array().required(),
    // availableDates: Joi.array().required(),
    // tourTime: Joi.array().required(),
    tourDiscount: Joi.object().required(),
    highLights: Joi.array(),
    blockedDates: Joi.array().required(),
  },
};

export const editTourAvailability = {
  body: {
    tourAvailabilityId: Joi.string().required(),
    tourName: Joi.string(),
    placeId: Joi.string(),
    locationName: Joi.string(),
    aboutlocation: Joi.string(),
    price: Joi.number(),
    meetingPlace: Joi.object(),
    tourSkills: Joi.string(),
    rideCategory: Joi.array(),
    tourMaxBooking: Joi.number(),
    languages: Joi.array(),
    whatsIncludes: Joi.array(),
    itinerary: Joi.object(),
    availableDates: Joi.array(),
    tourTime: Joi.array(),
    blockedDates: Joi.array(),
    tourDiscount: Joi.object(),
    highLights: Joi.array(),
  },
};

export const deleteAvailability = {
  body: {
    availability: Joi.string().required(),
  },
};

export const getAvailabilityById = {
  body: {
    tourId: Joi.string().required(),
  },
};
