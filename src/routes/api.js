import express from 'express';
import validate from 'express-validation';
import multer from 'multer';
import indiviualRoute from './individual';
import tourGuideRoute from './tourGuide';
import businessRoute from './business';
import paymentRoute from './payment';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

import * as availabilityController from '../controllers/Availability/availability.controller';
import * as availabilityValidator from '../controllers/Availability/availability.validator';

import * as bookingController from '../controllers/Bookings/bookings.controller';
import * as bookingValidator from '../controllers/Bookings/bookings.validator';

const router = express.Router();

const upload = multer();
// const uploads = upload.fields([{ name: 'profilePic', maxCount: 10 }]);
const uploadFile = upload.single('profilePic');
const uploads = upload.fields([{ name: 'file', maxCount: 10 }]);

//= ===============================
// API routes
//= ===============================

// common APIs
router.get('/profile', userController.profile);

router.post(
  '/getNotifications',
  bookingController.getNotifications,
);

router.post(
  '/updateProfile',
  validate(userValidator.updateProfile),
  uploadFile,
  userController.updateProfile,
);

router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);

router.post(
  '/deleteFiles',
  validate(userValidator.deleteFiles),
  userController.deleteFiles,
);

router.post(
  '/referralCode',
  validate(userValidator.referralCode),
  userController.referralCode,
);

router.delete(
  '/delete/Availability',
  validate(availabilityValidator.deleteAvailability),
  availabilityController.deleteAvailability,
);

router.get(
  '/getBookingHistory/:id',
  bookingController.getBookingHistory,
);

router.get(
  '/getBookingsByUserId',
  bookingController.getBookingsByUserId,
);

router.post(
  '/getBooking',
  validate(bookingValidator.getBooking),
  bookingController.getBooking,
);

router.post(
  '/getAllBookingDetailsById',
  validate(bookingValidator.getAllBookingDetailsById),
  bookingController.getAllBookingDetailsById,
);

router.get(
  '/getBookingDetailsById',
  bookingController.getBookingDetailsById,
);

router.post(
  '/getTours',
  userController.getTours,
);

router.post(
  '/search',
  userController.search,
);

router.post(
  '/getAvailabilityById',
  validate(availabilityValidator.getAvailabilityById),
  availabilityController.getAvailabilityById,
);

router.post(
  '/getDeviceId',
  validate(userValidator.getDeviceId),
  userController.getDeviceId,
);

router.post(
  '/deleteUserById',
  validate(userValidator.deleteUserById),
  userController.deleteUserById,
);

router.post(
  '/adCount',
  validate(userValidator.adClickCount),
  userController.adClickCount,
);

router.post(
  '/destinationTourCount',
  validate(userValidator.destinationTourClickCount),
  userController.destinationTourClickCount,
);

router.get(
  '/getAllUsers',
  userController.getAllUsers,
);

router.get(
  '/getBookingsOfAllUser',
  bookingController.getBookingsOfAllUser,
);

router.post(
  '/appOpenCount',
  validate(userValidator.appOpenCount),
  userController.appOpenCount,
);

router.post(
  '/bookLodge',
  validate(userValidator.bookLodge),
  userController.bookLodge,
);

router.post(
  '/chat',
  validate(userValidator.chat),
  userController.chat,
);

router.post(
  '/addChannelUrl',
  validate(bookingValidator.addChannelUrl),
  bookingController.addChannelUrl,
);

router.post(
  '/lodgeImages',
  userController.lodgeImages,
);

// Indiviual profile APIs
router.use(indiviualRoute);

// tourGuide profile APIs
router.use('/tour', tourGuideRoute);

// Business profile APIs
router.use('/business', businessRoute);

router.use('/payment', paymentRoute);

module.exports = router;
