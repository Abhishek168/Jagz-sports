const Joi = require('joi');

export const getBookings = {
  body: {
    statusId: Joi.string(),
    traveller: Joi.string(),
  },
};

export const acceptBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const rejectBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const acceptTourBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const rejectTourBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const addBooking = {
  body: {
    user: Joi.string().required(),
    availability: Joi.string().required(),
    selectedDate: Joi.string().required(),
    time: Joi.string().required(),
    duration: Joi.number().required(),
    rideCategory: Joi.array(),
    languages: Joi.array(),
    mtbSpeed: Joi.array(),
    mtbRidePreference: Joi.array(),
    cyclingSpeed: Joi.array(),
    cyclingPreference: Joi.array(),
    additionalRiders: Joi.array(),
    price: Joi.number().required(),
  },
};

export const addTourBooking = {
  body: {
    user: Joi.string().required(),
    availability: Joi.string().required(),
    selectedDate: Joi.string().required(),
    time: Joi.string().required(),
    additionalRiders: Joi.array().required(),
    totalRiders: Joi.number().required(),
    signature: Joi.string().required(),
    price: Joi.number().required(),
  },
};

export const addBusinessTourBooking = {
  body: {
    user: Joi.string().required(),
    availability: Joi.string().required(),
    selectedDate: Joi.string().required(),
    time: Joi.string().required(),
    additionalRiders: Joi.array().required(),
    totalRiders: Joi.number().required(),
    signature: Joi.string().required(),
    price: Joi.number().required(),
  },
};

export const getBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const getAllBookingDetailsById = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const cancelBooking = {
  body: {
    bookingId: Joi.string().required(),
    currentBookingCancelDate: Joi.string().required(),
  },
};

export const acceptBusinessTourBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const rejectBusinessTourBooking = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const addChannelUrl = {
  body: {
    bookingId: Joi.string().required(),
    channelUrl: Joi.string().required(),
  },
};
