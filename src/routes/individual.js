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
  '/getAvailability',
  validate(availabilityValidator.getAvailability),
  availabilityController.getAvailability,
);

router.post(
  '/getGuruProfile',
  validate(availabilityValidator.getGuruProfile),
  availabilityController.getGuruProfile,
);

router.post(
  '/addAvailability',
  availabilityController.addAvailability,
);

router.put(
  '/editAvailability',
  validate(availabilityValidator.editAvailability),
  availabilityController.editAvailability,
);

router.post(
  '/addBooking',
  validate(bookingValidator.addBooking),
  bookingController.addBooking,
);

router.post(
  '/getAllBookings',
  validate(bookingValidator.getBookings),
  bookingController.getAllBookings,
);

router.post(
  '/acceptBooking',
  validate(paymentValidator.createTransactionIndividual),
  paymentController.createTransactionIndividual,
);

router.post(
  '/rejectBooking',
  validate(bookingValidator.rejectBooking),
  bookingController.rejectBooking,
);

router.get(
  '/getBookingDetails/:bookingId',
  bookingController.getBookingDetails,
);

router.post(
  '/cancelBooking',
  validate(bookingValidator.cancelBooking),
  bookingController.cancelBooking,
);

module.exports = router;
