const Joi = require('joi');

export const createMerchantAccount = {
  body: {
    individual: Joi.object().required().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      dateOfBirth: Joi.string().required(),
      address: Joi.object().required().keys({
        streetAddress: Joi.string().required(),
        locality: Joi.string().required(),
        region: Joi.string().required(),
        postalCode: Joi.string().required(),
      }),
    }),
    business: Joi.object().keys({
      legalName: Joi.string(),
      dbaName: Joi.string(),
      taxId: Joi.string(),
      address: Joi.object(),
    }),
    funding: Joi.object().keys({
      accountNumber: Joi.string(),
      routingNumber: Joi.string(),
      descriptor: Joi.string(),
      mobilePhone: Joi.string(),
      email: Joi.string(),
    }),
    destination: Joi.string().required(),
    tosAccepted: Joi.bool().required(),
  },
};

export const createPaymentMethod = {
  body: {
    paymentMethodNonce: Joi.string().required(),
  },
};

export const deletePaymentMethod = {
  body: {
    paymentMethodToken: Joi.string().required(),
  },
};

export const createTransactionIndividual = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const createTransactionTourGuide = {
  body: {
    bookingId: Joi.string().required(),
  },
};

export const addTourGuidePaymentToken = {
  body: {
    bookingId: Joi.string().required(),
    paymentMethodToken: Joi.string().required(),
  },
};
