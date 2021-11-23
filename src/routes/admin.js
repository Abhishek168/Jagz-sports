import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as bookingController from '../controllers/Bookings/bookings.controller';
import * as bookingValidator from '../controllers/Bookings/bookings.validator';

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
// router.get('/allUsers', userController.allUsers);

router.get(
  '/getAllUsers',
  userController.getAllUsers,
);

router.get(
  '/getBookingsOfAllUser',
  bookingController.getBookingsOfAllUser,
);

router.post(
  '/getAllBookingDetailsById',
  validate(bookingValidator.getAllBookingDetailsById),
  bookingController.getAllBookingDetailsById,
);

router.get(
  '/dashboard',
  userController.dashboard,
);

router.post(
  '/getUserDetailsById',
  validate(userValidator.getUserDetailsById),
  userController.getUserDetailsById,
);

router.post(
  '/addNote',
  userController.addNote,
);

module.exports = router;
