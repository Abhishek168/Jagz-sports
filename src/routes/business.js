import express from 'express';
import validate from 'express-validation';

import * as availabilityController from '../controllers/Availability/availability.controller';
import * as availabilityValidator from '../controllers/Availability/availability.validator';

import * as bookingController from '../controllers/Bookings/bookings.controller';
import * as bookingValidator from '../controllers/Bookings/bookings.validator';

import * as paymentController from '../controllers/Payment/payment.controller';
import * as paymentValidator from '../controllers/Payment/payment.validator';

const router = express.Router();

router.get(
  '/tour/getAllAvailability',
  availabilityController.getAllBusinessToursAvailability,
);

router.post(
  '/tour/getToursAvailabilities',
  validate(availabilityValidator.getBusinessToursAvailabilities),
  availabilityController.getBusinessToursAvailabilities,
);

router.post(
  '/getTourGuideProfile',
  validate(availabilityValidator.getBusinessTourGuideProfile),
  availabilityController.getBusinessTourGuideProfile,
);

router.post(
  '/tour/addAvailability',
  validate(availabilityValidator.addTourAvailability),
  availabilityController.addBusinessTourAvailability,
);

router.put(
  '/tour/editAvailability',
  validate(availabilityValidator.editTourAvailability),
  availabilityController.editBusinessTourAvailability,
);

router.post(
  '/tour/addBooking',
  validate(bookingValidator.addBusinessTourBooking),
  bookingController.addBusinessTourBooking,
);

router.post(
  '/tour/acceptBooking',
  validate(paymentValidator.createTransactionIndividual),
  paymentController.createTransactionIndividual,
);

router.post(
  '/tour/rejectBooking',
  validate(bookingValidator.rejectBusinessTourBooking),
  bookingController.rejectBusinessTourBooking,
);

module.exports = router;
