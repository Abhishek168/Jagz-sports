import { successResponse, errorResponse } from '../../helpers';
import Bookings from '../../models/Bookings';
import Availabilities from '../../models/Availabilities';
import BookingHistories from '../../models/BookingHistories';
import Users from '../../models/Users';
import UserActivities from '../../models/UserActivities';
import Notifications from '../../models/Notifications';
import {
  ROLE_CODE, ERROR_MESSAGE, AVAILABILITYTYPE, BOOKING_STATUS, NOTIFICATION_TYPE, DEFAULT_PROFILE,
} from '../../helpers/constants';
import sendEmail from '../../helpers/sendEmail';
import templates from '../../helpers/templates';
import temp from '../../helpers/newTemplate';

const moment = require('moment-business-days');

export const getNotifications = async (req, res) => {
  try {
    if (req.body.notificationID) {
      await Notifications.findByIdAndUpdate(req.body.notificationID, {
        notificationStatus: 'Read',
      });
    }
    const response = await Notifications.find({ userTo: req.user.userId, isDeleted: false })
      .populate({
        path: 'userTo',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          roleCode: 1,
          email: 1,
          profilePic: 1,
          currentLoggedInDeviceId: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
      }).populate({
        path: 'userFrom',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          roleCode: 1,
          email: 1,
          profilePic: 1,
          currentLoggedInDeviceId: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
      }).populate({
        path: 'bookingDetails',
        select: {
          _id: 1,
          bookingStatus: 1,
          selectedDate: 1,
          rideCategory: 1,
          time: 1,
          duration: 1,
          payment: 1,
          cost: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
        populate: {
          path: 'availability',
          select: {
            _id: 1,
            tourName: 1,
            tourDiscount: 1,
          },
        },
      });
    const count = await Notifications.count({
      userTo: req.user.userId,
      notificationStatus: 'Unread',
      isDeleted: false,
    });
    return successResponse(req, res, { response, count });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Bookings History APIs

export const getBookingHistory = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.params.id);
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    const historyData = await BookingHistories.find({ bookingId: bookingData.id });
    return successResponse(req, res, historyData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const addBookingHistory = async (bookingId, previousStatus, modifiedStatus) => {
  try {
    const bookingHistoryObj = {
      bookingId,
      previousStatus,
      modifiedStatus,
      modifiedStatusDate: new Date(),
    };
    await BookingHistories.create(bookingHistoryObj);
    return '';
  } catch (error) {
    throw new Error(error.message);
  }
};

// Individual Booking

export const addBooking = async (req, res) => {
  try {
    let createBookingObj = {};
    let selectObject = {};
    let bookingData = {};
    let responseData = {};
    const availabilityData = await Availabilities.findOne({
      availabilityType: AVAILABILITYTYPE.GURU,
      _id: req.body.availability,
    }).select({ _id: 1, price: 1, rideCategory: 1 });
    if (!availabilityData) {
      throw new Error(ERROR_MESSAGE.AVAILABILITY_NOT_FOUND);
    }
    const guruData = await Users.findById(req.body.user).select('_id');
    if (!guruData) {
      throw new Error(ERROR_MESSAGE.GURU_NOT_FOUND);
    }
    if (req.user.userId === guruData.id) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    if (req.user.roleCode === ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    bookingData = await Bookings.findOne({ traveller: req.user.userId });
    if (bookingData) {
      await Users.findByIdAndUpdate(req.user.userId, { isFirstBooking: false });
    }
    const {
      availability, selectedDate, time, duration, rideCategory,
      languages, mtbSpeed, mtbRidePreference, cyclingSpeed,
      cyclingPreference, additionalRiders, signature, price, currentBookingDate,
    } = req.body;
    // total riders
    const totalRiders = additionalRiders.length + 1;
    createBookingObj = {
      user: guruData.id,
      traveller: req.user.userId,
      availability,
      bookingStatus: BOOKING_STATUS.REQUESTED,
      selectedDate,
      time,
      duration,
      rideCategory: availabilityData.rideCategory,
      languages,
      signature,
      mtbSpeed,
      mtbRidePreference,
      cyclingSpeed,
      cyclingPreference,
      totalRiders,
      additionalRiders,
      cost: price,

      dateCreate: new Date(),
    };
    selectObject = {
      user: 1,
      traveller: 1,
      availability: 1,
      bookingStatus: 1,
      selectedDate: 1,
      time: 1,
      duration: 1,
      rideCategory: 1,
      rideType: 1,
      languages: 1,
      mtbSpeed: 1,
      mtbRidePreference: 1,
      cyclingSpeed: 1,
      cyclingPreference: 1,
      totalRiders: 1,
      additionalRiders: 1,
      dateCreate: 1,
      cost: 1,
    };
    const todayDate = new Date(currentBookingDate).toString();
    const bookingDate = new Date(createBookingObj.selectedDate).toString();
    if (bookingDate.slice(0, 15) === todayDate.slice(0, 15)) {
      let selectedHour = time.slice(0, 2);
      const selectedMin = time.slice(3, 5);
      const selectedFormat = time.slice(6, 8);
      let hours = currentBookingDate.slice(12, 14);
      let min = currentBookingDate.slice(15, 17);
      const format = currentBookingDate.slice(21, 23);
      if ((selectedFormat === 'PM') && (Number(selectedHour) < 12)) {
        selectedHour = Number(selectedHour) + 12;
      }
      if ((format === 'PM') && (Number(hours) < 12)) {
        hours = Number(hours) + 12;
      }
      const fixedMinute = 30;
      const date = new Date(currentBookingDate);
      date.setMinutes(date.getMinutes() + fixedMinute);
      min = date.getMinutes();
      hours = date.getHours();
      if (Number(selectedHour) < Number(hours)) {
        throw new Error(ERROR_MESSAGE.PLEASE_SELECT_ANOTHER_START_TIME);
      } else if (Number(selectedHour) === Number(hours)) {
        if (Number(selectedMin) < Number(min)) {
          throw new Error(ERROR_MESSAGE.PLEASE_SELECT_ANOTHER_START_TIME);
        }
      }
    }
    bookingData = await Bookings.create(createBookingObj);
    responseData = await Bookings.findById(bookingData.id).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        profilePic: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        rideCategory: 1,
        price: 1,
        locationName: 1,
        tourName: 1,
      },
    })
      .select(selectObject);
    let mailRideCategory;
    if (responseData.availability.rideCategory[0].checked === true
      && responseData.availability.rideCategory[1].checked === true) {
      mailRideCategory = `${responseData.availability.rideCategory[0].key}, ${responseData.availability.rideCategory[1].key}`;
    } else if (responseData.availability.rideCategory[0].checked === true) {
      mailRideCategory = responseData.availability.rideCategory[0].key;
    } else if (responseData.availability.rideCategory[1].checked === true) {
      mailRideCategory = responseData.availability.rideCategory[1].key;
    } else {
      mailRideCategory = 'Not Specified';
    }
    const serviceFee = (responseData.cost - (responseData.cost / 1.15)).toFixed(2);
    const serviceFeeIN = (((responseData.cost / 1.15) * 10) / 100).toFixed(2);
    const userAmount = (responseData.cost - serviceFeeIN - serviceFee).toFixed(2);
    const mailDate = new Date(responseData.selectedDate).toDateString();
    const mailUser = {
      greetingName: responseData.user.firstName,
      traveller: `${responseData.traveller.firstName} ${responseData.traveller.lastName}`,
      user: `${responseData.user.firstName} ${responseData.user.lastName}`,
      serviceFee,
      serviceFeeIN,
      mailDate,
      mailRideCategory,
      userAmount,
    };
    if (responseData.traveller.profilePic === '') {
      mailUser.profilePic = DEFAULT_PROFILE;
    }
    await sendEmail(responseData.traveller.email, `Your booking request was sent to ${mailUser.user}`, temp.travellerBookRequestIn(mailUser, responseData));
    await sendEmail(responseData.user.email, 'New booking request', temp.hostBookRequestIn(mailUser, responseData));
    await UserActivities.create({ user: responseData.traveller.id, activity: 'Added Booking' });
    return successResponse(req, res, responseData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getBookingDetails = async (req, res) => {
  try {
    const response = await Bookings.findById(req.params.bookingId)
      .populate({
        path: 'user',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          currentLoggedInDeviceId: 1,
        },
      }).populate({
        path: 'traveller',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
        },
      });
    response.signature = '';
    return successResponse(req, res, response || {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const { traveller } = req.body;
    const getObj = {};
    if (traveller) {
      getObj.traveller = traveller;
      getObj.isTravellerDeleted = false;
    }
    const response = await Bookings.find(getObj).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
      },
    });
    response.signature = '';
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const acceptBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId);
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (req.user.roleCode === ROLE_CODE.PEOPLE
      && !req.user.availableGuru) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    await Bookings.findByIdAndUpdate(
      bookingData.id, { bookingStatus: BOOKING_STATUS.ACCEPTED, dateUpdate: new Date() },
    );
    const response = await Bookings.findById(req.body.bookingId).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    });
    const mailDate = new Date(response.selectedDate).toDateString();
    const mailUser = {
      greetingName: response.traveller.firstName,
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: response.user.firstName,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
    };
    await addBookingHistory(bookingData.id, bookingData.bookingStatus, response.bookingStatus);
    // add notification
    await Notifications.create({
      userTo: bookingData.traveller,
      userFrom: bookingData.user,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: bookingData.user,
      userFrom: bookingData.traveller,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    await sendEmail(response.traveller.email, 'Traveler Booking Request - Accepted!', templates.acceptBooking(mailUser));
    await UserActivities.create({ user: response.user.id, activity: 'Accepted Booking' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const rejectBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId);
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    if (req.user.roleCode === ROLE_CODE.PEOPLE
      && !req.user.availableGuru) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    await Bookings.findByIdAndUpdate(
      bookingData.id, { bookingStatus: BOOKING_STATUS.REJECTED, dateUpdate: new Date() },
    );
    const response = await Bookings.findById(req.body.bookingId).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        rideCategory: 1,
        price: 1,
        locationName: 1,
        tourName: 1,
      },
    });
    let mailRideCategory;
    if (response.availability.rideCategory[0].checked === true
      && response.availability.rideCategory[1].checked === true) {
      mailRideCategory = `${response.availability.rideCategory[0].key}, ${response.availability.rideCategory[1].key}`;
    } else if (response.availability.rideCategory[0].checked === true) {
      mailRideCategory = response.availability.rideCategory[0].key;
    } else if (response.availability.rideCategory[1].checked === true) {
      mailRideCategory = response.availability.rideCategory[1].key;
    } else {
      mailRideCategory = 'Not Specified';
    }
    const serviceFee = (response.cost - (response.cost / 1.15)).toFixed(2);
    const serviceFeeIN = (((response.cost / 1.15) * 10) / 100).toFixed(2);
    const userAmount = (response.cost - serviceFeeIN - serviceFee).toFixed(2);
    const mailDate = new Date(response.selectedDate).toDateString();
    const mailUser = {
      greetingName: response.user.firstName,
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: `${response.user.firstName} ${response.user.lastName}`,
      serviceFee,
      serviceFeeIN,
      mailDate,
      mailRideCategory,
      userAmount,
    };
    await addBookingHistory(bookingData.id, bookingData.bookingStatus, response.bookingStatus);
    // add notification
    await Notifications.create({
      userTo: bookingData.traveller,
      userFrom: bookingData.user,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.REJECTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: bookingData.user,
      userFrom: bookingData.traveller,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.REJECTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    await sendEmail(response.traveller.email, 'Your booking request was declined', temp.travellerRejectRequestIn(mailUser, response));
    await sendEmail(response.user.email, `You’ve declined a booking request with ${mailUser.traveller}`, temp.hostRejectRequestIn(mailUser, response));
    await UserActivities.create({ user: response.user.id, activity: 'Rejected Booking' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Tour Booking

export const addTourBooking = async (req, res) => {
  try {
    let createBookingObj = {};
    let selectObject = {};
    let bookingData = {};
    let responseData = {};
    if (req.user.roleCode === ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const availabilityData = await Availabilities.findOne({
      user: req.body.user,
      availabilityType: AVAILABILITYTYPE.TOUR,
      _id: req.body.availability,
    }).select({
      _id: 1, tourMaxBooking: 1, price: 1, rideCategory: 1,
    });
    if (!availabilityData) {
      throw new Error(ERROR_MESSAGE.TOUR_AVAILABILITY_NOT_FOUND);
    }
    const tourGuideData = await Users.findById(req.body.user).select({ _id: 1, roleCode: 1 });
    if (!tourGuideData || tourGuideData.roleCode !== ROLE_CODE.TOURGUIDE) {
      throw new Error(ERROR_MESSAGE.TOURGUIDE_NOT_FOUND);
    }
    if (req.user.userId === tourGuideData.id) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    bookingData = await Bookings.findOne({ traveller: req.user.userId });
    if (bookingData) {
      await Users.findByIdAndUpdate(req.user.userId, { isFirstBooking: false });
    }
    const {
      availability, selectedDate, time, isBikeRental, bikeRentalDetails, rideCategory,
      totalRiders, additionalRiders, signature, price, currentBookingDate,
    } = req.body;
    const currentBookingCount = await Bookings.find({
      availability: availabilityData.id,
      bookingStatus: BOOKING_STATUS.ACCEPTED,
      selectedDate,
    }).countDocuments();
    if (currentBookingCount >= availabilityData.tourMaxBooking) {
      throw new Error(ERROR_MESSAGE.MAX_BOOKING_REACHED);
    }
    createBookingObj = {
      user: tourGuideData.id,
      traveller: req.user.userId,
      availability,
      bookingStatus: BOOKING_STATUS.REQUESTED,
      selectedDate,
      time,
      totalRiders,
      additionalRiders,
      signature,
      cost: price,
      rideCategory,
      isBikeRental,
      bikeRentalDetails,
      dateCreate: new Date(),
    };
    selectObject = {
      user: 1,
      traveller: 1,
      availability: 1,
      bookingStatus: 1,
      selectedDate: 1,
      time: 1,
      totalRiders: 1,
      additionalRiders: 1,
      signature: 1,
      rideCategory: 1,
      dateCreate: 1,
      cost: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    };
    const todayDate = new Date(currentBookingDate).toString();
    const bookingDate = new Date(createBookingObj.selectedDate).toString();
    if (bookingDate.slice(0, 15) === todayDate.slice(0, 15)) {
      let selectedHour = time.slice(0, 2);
      const selectedMin = time.slice(3, 5);
      const selectedFormat = time.slice(6, 8);
      let hours = currentBookingDate.slice(11, 13);
      let min = currentBookingDate.slice(14, 16);
      const format = currentBookingDate.slice(20, 22);
      if ((selectedFormat === 'PM') && (Number(selectedHour) < 12)) {
        selectedHour = Number(selectedHour) + 12;
      }
      if ((format === 'PM') && (Number(hours) < 12)) {
        hours = Number(hours) + 12;
      }
      const fixedMinute = 30;
      const date = new Date(currentBookingDate);
      date.setMinutes(date.getMinutes() + fixedMinute);
      min = date.getMinutes();
      hours = date.getHours();
      if (Number(selectedHour) < Number(hours)) {
        throw new Error(ERROR_MESSAGE.PLEASE_SELECT_ANOTHER_START_TIME);
      } else if (Number(selectedHour) === Number(hours)) {
        if (Number(selectedMin) < Number(min)) {
          throw new Error(ERROR_MESSAGE.PLEASE_SELECT_ANOTHER_START_TIME);
        }
      }
    }
    bookingData = await Bookings.create(createBookingObj);
    await addBookingHistory(bookingData.id, BOOKING_STATUS.NONE, bookingData.bookingStatus);
    responseData = await Bookings.findById(bookingData.id).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
        profilePic: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        tourName: 1,
        price: 1,
        rideCategory: 1,
        locationName: 1,
        tourDiscount: 1,
      },
    })
      .select(selectObject);
    let mailRideCategory;
    if (responseData.availability.rideCategory[0].checked === true
      && responseData.availability.rideCategory[1].checked === true) {
      mailRideCategory = `${responseData.availability.rideCategory[0].key}, ${responseData.availability.rideCategory[1].key}`;
    } else if (responseData.availability.rideCategory[0].checked === true) {
      mailRideCategory = responseData.availability.rideCategory[0].key;
    } else if (responseData.availability.rideCategory[1].checked === true) {
      mailRideCategory = responseData.availability.rideCategory[1].key;
    } else {
      mailRideCategory = 'Not Specified';
    }
    let tourDiscount = 0;
    let disc;
    if (Number(responseData.totalRiders) >= Number(responseData.availability.tourDiscount.people)) {
      tourDiscount = ((responseData.availability.price * responseData.totalRiders)
        * Number(responseData.availability.tourDiscount.discount)) / 100;
      disc = responseData.availability.tourDiscount.discount;
    } else {
      disc = 0;
    }
    const serviceFee = (responseData.cost - (responseData.cost / 1.15)).toFixed(2);
    const serviceFeeIN = (((responseData.cost / 1.15) * 10) / 100).toFixed(2);
    const userAmount = (responseData.cost - serviceFeeIN - serviceFee).toFixed(2);
    const mailDate = new Date(responseData.selectedDate).toDateString();
    const mailUser = {
      greetingName: responseData.user.firstName,
      traveller: `${responseData.traveller.firstName} ${responseData.traveller.lastName}`,
      user: `${responseData.user.firstName} ${responseData.user.lastName}`,
      mailRideCategory,
      mailDate,
      serviceFee,
      serviceFeeIN,
      userAmount,
      tourDiscount,
      disc,
    };
    if (responseData.traveller.profilePic === '') {
      mailUser.profilePic = DEFAULT_PROFILE;
    }
    if (responseData.bikeRentalDetails.length !== 0) {
      await sendEmail(responseData.traveller.email,
        `Your booking request was sent for the tour: ${responseData.availability.tourName}`,
        temp.travellerBookRequestTGBIKE(mailUser, responseData));
      await sendEmail(responseData.user.email,
        'New booking request',
        temp.hostBookRequestTGBIKE(mailUser, responseData));
    } else {
      await sendEmail(responseData.traveller.email,
        `Your booking request was sent for the tour: ${responseData.availability.tourName}`,
        temp.travellerBookRequestTG(mailUser, responseData));
      await sendEmail(responseData.user.email,
        'New tour booking request',
        temp.hostBookRequestTG(mailUser, responseData));
    }
    await UserActivities.create({ user: responseData.traveller.id, activity: 'Added Booking' });
    return successResponse(req, res, { responseData, currentBookingCount });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const acceptTourBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId)
      .select({
        _id: 1, bookingStatus: 1, traveller: 1, user: 1,
      });
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (req.user.roleCode !== ROLE_CODE.TOURGUIDE) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    await Bookings.findByIdAndUpdate(
      bookingData.id, { bookingStatus: BOOKING_STATUS.ACCEPTED, dateUpdate: new Date() },
    );
    const response = await Bookings.findById(req.body.bookingId).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    });
    await addBookingHistory(bookingData.id, bookingData.bookingStatus, response.bookingStatus);
    // add notification
    await Notifications.create({
      userTo: bookingData.traveller,
      userFrom: bookingData.user,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: bookingData.user,
      userFrom: bookingData.traveller,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    const mailDate = new Date(response.selectedDate).toDateString();
    const mailUser = {
      greetingName: response.traveller.firstName,
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: `${response.user.firstName} ${response.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
    };
    await sendEmail(response.traveller.email, 'Traveler Booking Request - Accepted!', templates.acceptBooking(mailUser));
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const rejectTourBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId)
      .select({
        _id: 1, bookingStatus: 1, traveller: 1, user: 1,
      });
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    if (req.user.roleCode !== ROLE_CODE.TOURGUIDE) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    await Bookings.findByIdAndUpdate(
      bookingData.id, { bookingStatus: BOOKING_STATUS.REJECTED, dateUpdate: new Date() },
    );
    const responseData = await Bookings.findById(req.body.bookingId).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        tourName: 1,
        price: 1,
        rideCategory: 1,
        locationName: 1,
        tourDiscount: 1,
      },
    });
    await addBookingHistory(bookingData.id, bookingData.bookingStatus, responseData.bookingStatus);
    // add notification
    await Notifications.create({
      userTo: bookingData.traveller,
      userFrom: bookingData.user,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.REJECTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: bookingData.user,
      userFrom: bookingData.traveller,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.REJECTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    let mailRideCategory;
    if (responseData.availability.rideCategory[0].checked === true
      && responseData.availability.rideCategory[1].checked === true) {
      mailRideCategory = `${responseData.availability.rideCategory[0].key}, ${responseData.availability.rideCategory[1].key}`;
    } else if (responseData.availability.rideCategory[0].checked === true) {
      mailRideCategory = responseData.availability.rideCategory[0].key;
    } else if (responseData.availability.rideCategory[1].checked === true) {
      mailRideCategory = responseData.availability.rideCategory[1].key;
    } else {
      mailRideCategory = 'Not Specified';
    }
    let tourDiscount = 0;
    let disc;
    if (Number(responseData.totalRiders) >= Number(responseData.availability.tourDiscount.people)) {
      tourDiscount = ((responseData.availability.price * responseData.totalRiders)
        * Number(responseData.availability.tourDiscount.discount)) / 100;
      disc = responseData.availability.tourDiscount.discount;
    } else {
      disc = 0;
    }
    const serviceFee = (responseData.cost - (responseData.cost / 1.15)).toFixed(2);
    const serviceFeeIN = (((responseData.cost / 1.15) * 10) / 100).toFixed(2);
    const userAmount = (responseData.cost - serviceFeeIN - serviceFee).toFixed(2);
    const mailDate = new Date(responseData.selectedDate).toDateString();
    const mailUser = {
      greetingName: responseData.user.firstName,
      traveller: `${responseData.traveller.firstName} ${responseData.traveller.lastName}`,
      user: `${responseData.user.firstName} ${responseData.user.lastName}`,
      mailRideCategory,
      mailDate,
      serviceFee,
      serviceFeeIN,
      userAmount,
      tourDiscount,
      disc,
    };
    if (responseData.traveller.profilePic === '') {
      mailUser.profilePic = DEFAULT_PROFILE;
    }
    if (responseData.bikeRentalDetails.length !== 0) {
      await sendEmail(responseData.traveller.email,
        'Your booking request was declined',
        temp.travellerRejectRequestTGBIKE(mailUser, responseData));
      await sendEmail(responseData.user.email,
        `You’ve declined a booking request with ${mailUser.traveller}`,
        temp.hostRejectRequestTGBIKE(mailUser, responseData));
    } else {
      await sendEmail(responseData.traveller.email,
        'Your booking request was declined',
        temp.travellerRejectRequestTG(mailUser, responseData));
      await sendEmail(responseData.user.email,
        `You’ve declined a booking request with ${mailUser.traveller}`,
        temp.hostRejectRequestTG(mailUser, responseData));
    }
    return successResponse(req, res, responseData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Business Tour Booking

export const addBusinessTourBooking = async (req, res) => {
  try {
    let createBookingObj = {};
    let bookingData = {};
    if (req.user.roleCode === ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const availabilityData = await Availabilities.findOne({
      availabilityType: AVAILABILITYTYPE.BUSINESS,
      _id: req.body.availability,
    }).select({
      _id: 1, tourMaxBooking: 1, price: 1, rideCategory: 1,
    });
    if (!availabilityData) {
      throw new Error(ERROR_MESSAGE.TOUR_AVAILABILITY_NOT_FOUND);
    }
    const businessTourGuideData = await Users.findById(req.body.user)
      .select({ _id: 1, roleCode: 1 });
    if (!businessTourGuideData || businessTourGuideData.roleCode !== ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.TOURGUIDE_NOT_FOUND);
    }
    /* if (req.user.userId === businessTourGuideData.id) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    } */
    bookingData = await Bookings.findOne({ traveller: req.user.userId });
    if (bookingData) {
      await Users.findByIdAndUpdate(req.user.userId, { isFirstBooking: false });
    }
    const {
      availability, selectedDate, time,
      totalRiders, additionalRiders, signature, price, currentBookingDate,
    } = req.body;
    const currentBookingCount = await Bookings.find({
      availability: availabilityData.id,
      bookingStatus: BOOKING_STATUS.ACCEPTED,
      selectedDate,
    }).countDocuments();
    if (currentBookingCount >= availabilityData.tourMaxBooking) {
      throw new Error(ERROR_MESSAGE.MAX_BOOKING_REACHED);
    }
    createBookingObj = {
      user: businessTourGuideData.id,
      traveller: req.user.userId,
      availability,
      bookingStatus: BOOKING_STATUS.REQUESTED,
      selectedDate,
      time,
      totalRiders,
      additionalRiders,
      signature,
      rideCategory: availabilityData.rideCategory,
      cost: price,
      dateCreate: new Date(),
    };
    const todayDate = new Date().toString();
    const bookingDate = new Date(createBookingObj.selectedDate).toString();
    if (bookingDate.slice(0, 15) === todayDate.slice(0, 15)) {
      let selectedHour = time.slice(0, 2);
      const selectedMin = time.slice(3, 5);
      const selectedFormat = time.slice(6, 8);
      let hours = currentBookingDate.slice(11, 13);
      let min = currentBookingDate.slice(14, 16);
      const format = currentBookingDate.slice(20, 22);
      if ((selectedFormat === 'PM') && (Number(selectedHour) < 12)) {
        selectedHour = Number(selectedHour) + 12;
      }
      if ((format === 'PM') && (Number(hours) < 12)) {
        hours = Number(hours) + 12;
      }
      const fixedMinute = 30;
      const date = new Date(currentBookingDate);
      date.setMinutes(date.getMinutes() + fixedMinute);
      min = date.getMinutes();
      hours = date.getHours();
      if (Number(selectedHour) < Number(hours)) {
        throw new Error(ERROR_MESSAGE.PLEASE_SELECT_ANOTHER_START_TIME);
      } else if (Number(selectedHour) === Number(hours)) {
        if (Number(selectedMin) < Number(min)) {
          throw new Error(ERROR_MESSAGE.PLEASE_SELECT_ANOTHER_START_TIME);
        }
      }
    }
    bookingData = await Bookings.create(createBookingObj);
    bookingData = await Bookings.findById(bookingData.id).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
        profilePic: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        tourName: 1,
        price: 1,
        rideCategory: 1,
      },
    });
    let mailRideCategory;
    if (bookingData.availability.rideCategory[0].checked === true
      && bookingData.availability.rideCategory[1].checked === true) {
      mailRideCategory = `${bookingData.availability.rideCategory[0].key}, ${bookingData.availability.rideCategory[1].key}`;
    } else if (bookingData.availability.rideCategory[0].checked === true) {
      mailRideCategory = bookingData.availability.rideCategory[0].key;
    } else if (bookingData.availability.rideCategory[1].checked === true) {
      mailRideCategory = bookingData.availability.rideCategory[1].key;
    } else {
      mailRideCategory = 'Not Specified';
    }
    const mailDate = new Date(bookingData.selectedDate).toDateString();
    const mailUser = {
      greetingName: bookingData.user.firstName,
      traveller: `${bookingData.traveller.firstName} ${bookingData.traveller.lastName}`,
      user: `${bookingData.user.firstName} ${bookingData.user.lastName}`,
      rideType: mailRideCategory,
      time: bookingData.time,
      tourName: bookingData.availability.tourName,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
      profilePic: bookingData.traveller.profilePic,
      dateCreate: bookingData.dateCreate,
    };
    if (bookingData.traveller.profilePic === '') {
      mailUser.profilePic = DEFAULT_PROFILE;
    }
    await sendEmail(bookingData.user.email, 'Host Booking Request', templates.requestBooking(mailUser));
    await UserActivities.create({ user: bookingData.traveller.id, activity: 'Added Booking' });
    return successResponse(req, res, bookingData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const acceptBusinessTourBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId)
      .select({
        _id: 1, bookingStatus: 1, traveller: 1, user: 1,
      });
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (req.user.roleCode !== ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    await Bookings.findByIdAndUpdate(
      bookingData.id, { bookingStatus: BOOKING_STATUS.ACCEPTED, dateUpdate: new Date() },
    );
    const response = await Bookings.findById(req.body.bookingId).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    });
    await addBookingHistory(bookingData.id, bookingData.bookingStatus, response.bookingStatus);
    // add notification
    await Notifications.create({
      userTo: bookingData.traveller,
      userFrom: bookingData.user,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: bookingData.user,
      userFrom: bookingData.traveller,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    const mailDate = new Date(response.selectedDate).toDateString();
    const mailUser = {
      greetingName: response.traveller.firstName,
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: `${response.user.firstName} ${response.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
    };
    await sendEmail(response.traveller.email, 'Traveler Booking Request - Accepted!', templates.acceptBooking(mailUser));
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const rejectBusinessTourBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId)
      .select({
        _id: 1, bookingStatus: 1, traveller: 1, user: 1,
      });
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (bookingData.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    if (req.user.roleCode !== ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    await Bookings.findByIdAndUpdate(
      bookingData.id, { bookingStatus: BOOKING_STATUS.REJECTED, dateUpdate: new Date() },
    );
    const response = await Bookings.findById(req.body.bookingId).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        currentLoggedInDeviceId: 1,
      },
    });
    await addBookingHistory(bookingData.id, bookingData.bookingStatus, response.bookingStatus);
    // add notification
    await Notifications.create({
      userTo: bookingData.traveller,
      userFrom: bookingData.user,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.REJECTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: bookingData.user,
      userFrom: bookingData.traveller,
      bookingDetails: bookingData.id,
      notificationType: BOOKING_STATUS.REJECTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    const mailDate = new Date(response.selectedDate).toDateString();
    const mailUser = {
      greetingName: response.traveller.firstName,
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: `${response.user.firstName} ${response.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
    };
    await sendEmail(response.traveller.email, 'Traveler Booking Request - Declined!', templates.rejectBooking(mailUser));
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getBooking = async (req, res) => {
  try {
    const bookingData = await Bookings.findById(req.body.bookingId)
      .select({
        _id: 1, bookingStatus: 1, payment: 1,
      });
    if (!bookingData) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    bookingData.signature = '';
    return successResponse(req, res, bookingData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getBookingDetailsById = async (req, res) => {
  try {
    const bookingDetails = await Bookings.find({
      traveller: req.user.userId,
      isTravellerDeleted: false,
    }).populate({
      path: 'availability',
      select: {
        tourName: 1,
        locationName: 1,
      },
    }).select({
      _id: 1,
      selectedDate: 1,
      time: 1,
      cost: 1,
      dateCreate: 1,
    });
    if (!bookingDetails) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    return successResponse(req, res, bookingDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getAllBookingDetailsById = async (req, res) => {
  try {
    const bookingDetails = await Bookings.findById(req.body.bookingId)
      .populate({
        path: 'availability',
        select: {
          tourName: 1,
          locationName: 1,
          tourDiscount: 1,
          price: 1,
        },
      })
      .populate({
        path: 'user',
        select: {
          _id: 1,
          email: 1,
          userName: 1,
          profilePic: 1,
          accountType: 1,
          roleCode: 1,
          isAvailabilitySet: 1,
          currentLoggedInDeviceId: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
      })
      .populate({
        path: 'traveller',
        select: {
          _id: 1,
          email: 1,
          userName: 1,
          profilePic: 1,
          accountType: 1,
          roleCode: 1,
          isAvailabilitySet: 1,
          currentLoggedInDeviceId: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
      });
    bookingDetails.signature = '';
    if (!bookingDetails) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    let tourDiscount = 0;
    if (Number(bookingDetails.totalRiders) >= Number(bookingDetails.availability.tourDiscount.people)) {
      tourDiscount = ((bookingDetails.availability.price * bookingDetails.totalRiders)
        * Number(bookingDetails.availability.tourDiscount.discount)) / 100;
    }
    const serviceFeeTraveller = (bookingDetails.cost - (bookingDetails.cost / 1.15)).toFixed(2);
    const serviceFeeHost = (((bookingDetails.cost / 1.15) * 10) / 100).toFixed(2);
    const hostTotalAmount = (bookingDetails.cost - serviceFeeHost - serviceFeeTraveller).toFixed(2);
    const priceBreakDown = {
      tourDiscount,
      tourGuideActualPrice: (bookingDetails.availability.price * bookingDetails.totalRiders).toFixed(2),
      hostActualPrice: (bookingDetails.availability.price * bookingDetails.duration).toFixed(2),
      tourPriceWithDiscount: ((bookingDetails.availability.price * bookingDetails.totalRiders) - tourDiscount).toFixed(2),
      serviceFeeTraveller,
      serviceFeeHost,
      hostTotalAmount,
      travellerTotalAmount: bookingDetails.cost,
    };
    return successResponse(req, res, { bookingDetails, priceBreakDown });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Get Bookings

export const getBookingsByUserId = async (req, res) => {
  try {
    const traveller = [];
    const guru = [];
    const travellerDetails = await Bookings.find({
      traveller: req.user.userId,
      isTravellerDeleted: false,
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        email: 1,
        profilePic: 1,
        currentLoggedInDeviceId: 1,
        businessType: 1,
        businessName: 1,
        businessEmail: 1,
        webURL: 1,
      },
    }).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        email: 1,
        profilePic: 1,
        currentLoggedInDeviceId: 1,
        businessType: 1,
        businessName: 1,
        businessEmail: 1,
        webURL: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        availabilityType: 1,
        tourName: 1,
      },
    })
      .select({
        _id: 1,
        bookingStatus: 1,
        selectedDate: 1,
        rideCategory: 1,
        time: 1,
        duration: 1,
        payment: 1,
        cost: 1,
        dateCreate: 1,
        dateUpdate: 1,
        paymentMethodToken: 1,
        isTravellerDeleted: 1,
        bikeRentalDetails: 1,
        isBikeRental: 1,
      });
    const guruDetails = await Bookings.find({ user: req.user.userId, isUserDeleted: false })
      .populate({
        path: 'traveller',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          roleCode: 1,
          email: 1,
          profilePic: 1,
          currentLoggedInDeviceId: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
      }).populate({
        path: 'user',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          roleCode: 1,
          email: 1,
          profilePic: 1,
          currentLoggedInDeviceId: 1,
          businessType: 1,
          businessName: 1,
          businessEmail: 1,
          webURL: 1,
        },
      }).populate({
        path: 'availability',
        select: {
          _id: 1,
          availabilityType: 1,
          tourName: 1,
        },
      })
      .select({
        _id: 1,
        bookingStatus: 1,
        selectedDate: 1,
        rideCategory: 1,
        time: 1,
        duration: 1,
        payment: 1,
        cost: 1,
        dateCreate: 1,
        dateUpdate: 1,
        paymentMethodToken: 1,
        isUserDeleted: 1,
        isBikeRental: 1,
        bikeRentalDetails: 1,
      });
    travellerDetails.forEach((ele) => {
      if (ele.availability.availabilityType === AVAILABILITYTYPE.TOUR) {
        if (ele.paymentMethodToken !== '') {
          traveller.push(ele);
        }
      } else if (ele.availability.availabilityType === AVAILABILITYTYPE.BUSINESS) {
        if (ele.paymentMethodToken !== '') {
          traveller.push(ele);
        }
      } else {
        traveller.push(ele);
      }
    });
    guruDetails.forEach((ele) => {
      if (ele.availability.availabilityType === AVAILABILITYTYPE.TOUR) {
        if (ele.paymentMethodToken !== '') {
          guru.push(ele);
        }
      } else if (ele.availability.availabilityType === AVAILABILITYTYPE.BUSINESS) {
        if (ele.paymentMethodToken !== '') {
          guru.push(ele);
        }
      } else {
        guru.push(ele);
      }
    });
    return successResponse(req, res, { traveller, guru });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Cancel Booking

export const cancelBooking = async (req, res) => {
  try {
    let bookingDetails = await Bookings.findById(req.body.bookingId);
    if (bookingDetails.bookingStatus === BOOKING_STATUS.CANCELED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_CANCELED);
    }
    const { currentBookingCancelDate } = req.body;
    const bookingDate1 = moment(bookingDetails.selectedDate).subtract(2, 'days').format('DD-MM-YYYY');
    const bookingDate2 = moment(bookingDetails.selectedDate).subtract(1, 'days').format('DD-MM-YYYY');
    const currentDate = moment().format('DD-MM-YYYY');
    if (bookingDate1 === currentDate) {
      let selectedHour = bookingDetails.time.slice(0, 2);
      const selectedFormat = bookingDetails.time.slice(6, 8);
      let hours = currentBookingCancelDate.slice(12, 14);
      const format = currentBookingCancelDate.slice(21, 23);
      if ((selectedFormat === 'PM') && (Number(selectedHour) < 12)) {
        selectedHour = Number(selectedHour) + 12;
      }
      if ((format === 'PM') && (Number(hours) < 12)) {
        hours = Number(hours) + 12;
      }
      if (Number(hours) > Number(selectedHour)) {
        throw new Error(ERROR_MESSAGE.BOOKING_CANNOT_BE_CANCELED_WITHIN_48_HOURS_OF_MEETING_TIME);
      }
      if (Number(hours) === Number(selectedHour)) {
        throw new Error(ERROR_MESSAGE.BOOKING_CANNOT_BE_CANCELED_WITHIN_48_HOURS_OF_MEETING_TIME);
      }
    }
    const date = moment(bookingDetails.selectedDate).format('DD-MM-YYYY');
    if ((currentDate === bookingDate2) || (currentDate === date)) {
      throw new Error(ERROR_MESSAGE.BOOKING_CANNOT_BE_CANCELED_WITHIN_48_HOURS_OF_MEETING_TIME);
    }
    if (bookingDetails.payment) {
      throw new Error(ERROR_MESSAGE.UNABLE_TO_CANCEL_BOOKING);
    }
    await Bookings.findByIdAndUpdate(bookingDetails.id,
      { bookingStatus: BOOKING_STATUS.CANCELED, dateUpdate: new Date() });
    bookingDetails = await Bookings.findById(bookingDetails.id).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        email: 1,
        profilePic: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        email: 1,
        profilePic: 1,
        currentLoggedInDeviceId: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        tourName: 1,
        price: 1,
        rideCategory: 1,
        locationName: 1,
        tourDiscount: 1,
      },
    });
    await Notifications.create({
      userTo: bookingDetails.user.id,
      userFrom: bookingDetails.traveller.id,
      bookingDetails: bookingDetails.id,
      notificationType: bookingDetails.bookingStatus,
      type: NOTIFICATION_TYPE.GURU,
    });
    await Notifications.create({
      userTo: bookingDetails.traveller.id,
      userFrom: bookingDetails.user.id,
      bookingDetails: bookingDetails.id,
      notificationType: bookingDetails.bookingStatus,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    let mailRideCategory;
    if (bookingDetails.availability.rideCategory[0].checked === true
      && bookingDetails.availability.rideCategory[1].checked === true) {
      mailRideCategory = `${bookingDetails.availability.rideCategory[0].key}, ${bookingDetails.availability.rideCategory[1].key}`;
    } else if (bookingDetails.availability.rideCategory[0].checked === true) {
      mailRideCategory = bookingDetails.availability.rideCategory[0].key;
    } else if (bookingDetails.availability.rideCategory[1].checked === true) {
      mailRideCategory = bookingDetails.availability.rideCategory[1].key;
    } else {
      mailRideCategory = 'Not Specified';
    }
    let tourDiscount = 0;
    let disc = 0;
    if (Number(bookingDetails.totalRiders) >= Number(bookingDetails.availability.tourDiscount.people)) {
      tourDiscount = ((bookingDetails.availability.price * bookingDetails.totalRiders)
        * Number(bookingDetails.availability.tourDiscount.discount)) / 100;
      disc = bookingDetails.availability.tourDiscount.discount;
    }
    const serviceFee = (bookingDetails.cost - (bookingDetails.cost / 1.15)).toFixed(2);
    const serviceFeeIN = (((bookingDetails.cost / 1.15) * 10) / 100).toFixed(2);
    const userAmount = (bookingDetails.cost - serviceFeeIN - serviceFee).toFixed(2);
    const mailDate = new Date(bookingDetails.selectedDate).toDateString();
    const mailUser = {
      greetingName: bookingDetails.user.firstName,
      traveller: `${bookingDetails.traveller.firstName} ${bookingDetails.traveller.lastName}`,
      user: `${bookingDetails.user.firstName} ${bookingDetails.user.lastName}`,
      mailRideCategory,
      mailDate,
      serviceFee,
      serviceFeeIN,
      userAmount,
      tourDiscount,
      disc,
    };
    if (!bookingDetails.duration) {
      if (bookingDetails.bikeRentalDetails.length !== 0) {
        await sendEmail(bookingDetails.traveller.email,
          `You’ve canceled your upcoming tour with ${mailUser.user}`,
          temp.travellerCancelRequestTGBIKE(mailUser, bookingDetails));
        await sendEmail(bookingDetails.user.email,
          'Your traveler has canceled their tour with you',
          temp.hostCancelRequestTGBIKE(mailUser, bookingDetails));
      } else {
        await sendEmail(bookingDetails.traveller.email,
          `You’ve canceled your upcoming tour with ${mailUser.user}`,
          temp.travellerCancelRequestTG(mailUser, bookingDetails));
        await sendEmail(bookingDetails.user.email,
          'Your traveler has canceled their tour with you',
          temp.hostCancelRequestTG(mailUser, bookingDetails));
      }
    } else {
      await sendEmail(bookingDetails.traveller.email, `You’ve canceled your upcoming meeting with ${mailUser.user}`, temp.travellerCancelRequestIn(mailUser, bookingDetails));
      await sendEmail(bookingDetails.user.email, 'Your traveler has canceled their meeting with you', temp.hostCancelRequestIn(mailUser, bookingDetails));
    }

    await UserActivities.create({ user: bookingDetails.traveller.id, activity: 'Canceled Booking' });
    return successResponse(req, res, bookingDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Get Bookings for Admin

export const getBookingsOfAllUser = async (req, res) => {
  try {
    const bookings = await Bookings.find().populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        email: 1,
      },
    }).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        email: 1,
      },
    }).select({
      _id: 1,
      selectedDate: 1,
      time: 1,
      duration: 1,
      rideCategory: 1,
      bookingStatus: 1,
      payment: 1,
      dateCreate: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    });
    return successResponse(req, res, bookings);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const addChannelUrl = async (req, res) => {
  try {
    let booking = await Bookings.findByIdAndUpdate(req.body.bookingId,
      { channelUrl: req.body.channelUrl, dateUpdate: new Date() });
    booking = await Bookings.findById(booking.id);
    booking.signature = '';
    return successResponse(req, res, booking);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
