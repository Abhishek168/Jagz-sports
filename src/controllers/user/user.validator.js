const Joi = require('joi');

export const getOtherUserProfile = {
  body: {
    userId: Joi.number().required(),
  },
};

export const sendOtp = {
  body: {
    email: Joi.string().email().required(),
    otp: Joi.number().required(),
  },
};

export const changePassword = {
  body: {
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
  },
};

export const resetPassword = {
  body: {
    email: Joi.string().email().required(),
    newPassword: Joi.string().required(),
  },
};

export const register = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    dateOfBirth: Joi.string(),
    // contactNumber: Joi.string(),
    accountType: Joi.string().required(),
    roleCode: Joi.string().required(),
    // password: Joi.string(),
  },
};

export const updateProfile = {
  body: {
    // id: Joi.number().required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    dateOfBirth: Joi.string(),
    // contactNumber: Joi.string(),
  },
};

export const deleteFiles = {
  body: {
    fileLink: Joi.string().required(),
  },
};

export const login = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string(),
  },
};

export const referralCode = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const getDeviceId = {
  body: {
    userId: Joi.string().required(),
  },
};

export const deleteUserById = {
  body: {
    userId: Joi.string().required(),
  },
};

export const adClickCount = {
  body: {
    imgName: Joi.string().required(),
  },
};

export const destinationTourClickCount = {
  body: {
    imgName: Joi.string().required(),
  },
};

export const adminLogin = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string(),
  },
};

export const getUserDetailsById = {
  body: {
    userId: Joi.string().required(),
  },
};

export const appOpenCount = {
  body: {
    deviceInfo: Joi.object().required(),
  },
};

export const bookLodge = {
  body: {
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    interestedIn: Joi.string().required(),
    maxOccupants: Joi.number().required(),
    accomodationType: Joi.array().required(),
    accomodationLocation: Joi.string().required(),
    bikingPreference: Joi.array().required(),
    bikeFriendlyAccomodation: Joi.array().required(),
    previousExperience: Joi.array().required(),
  },
};

export const chat = {
  body: {
    senderId: Joi.string().required(),
    receiverId: Joi.string().required(),
  },
};

export const becomeHost = {
  body: {
    email: Joi.string().email().required(),
  },
};
