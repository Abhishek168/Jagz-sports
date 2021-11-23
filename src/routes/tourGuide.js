import express from 'express';
import validate from 'express-validation';

import * as availabilityController from '../controllers/Availability/availability.controller';
import * as availabilityValidator from '../controllers/Availability/availability.validator';

import * as bookingController from '../controllers/Bookings/bookings.controller';
import * as bookingValidator from '../controllers/Bookings/bookings.validator';

import * as paymentController from '../controllers/Payment/payment.controller';
import * as paymentValidator from '../controllers/Payment/payment.validator';

const router = express.Router();

router.post(
  '/getTourGuideProfile',
  validate(availabilityValidator.getTourGuideProfile),
  availabilityController.getTourGuideProfile,
);

router.get(
  '/getAllAvailability',
  availabilityController.getAllToursAvailability,
);

router.post(
  '/getToursAvailabilities',
  validate(availabilityValidator.getToursAvailabilities),
  availabilityController.getToursAvailabilities,
);

router.post(
  '/addAvailability',
  validate(availabilityValidator.addTourAvailability),
  availabilityController.addTourAvailability,
);

router.put(
  '/editAvailability',
  validate(availabilityValidator.editTourAvailability),
  availabilityController.editTourAvailability,
);

router.post(
  '/addBooking',
  validate(bookingValidator.addTourBooking),
  bookingController.addTourBooking,
);

router.post(
  '/acceptBooking',
  validate(paymentValidator.createTransactionIndividual),
  paymentController.createTransactionIndividual,
);

router.post(
  '/rejectBooking',
  validate(bookingValidator.rejectTourBooking),
  bookingController.rejectTourBooking,
);

module.exports = router;
