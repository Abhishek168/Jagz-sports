/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { successResponse, errorResponse } from '../../helpers';
import {
  ROLE_CODE, ERROR_MESSAGE, STATUS_TRANSACTION, BOOKING_STATUS, NOTIFICATION_TYPE, INCREMENT,
  SERVICE_FREE_AMOUNT, TOURGUIDE_SERVICE_FREE_AMOUNT,
} from '../../helpers/constants';
import sendEmail from '../../helpers/sendEmail';
import templates from '../../helpers/templates';
import Braintree from '../../helpers/braintree';
import Transactions from '../../models/Transactions';
import Bookings from '../../models/Bookings';
import Users from '../../models/Users';
import Chats from '../../models/Chats';
import UserActivities from '../../models/UserActivities';
import Notifications from '../../models/Notifications';
import * as bookingController from '../Bookings/bookings.controller';
import temp from '../../helpers/newTemplate';

const moment = require('moment-business-days');

const braintree = new Braintree({
  environment: process.env.ENVIRONMENT,
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY,
  masterMerchantAccountId: process.env.MASTERMERCHANTACCOUNTID,
});

export const CHANNEL_TYPE = 'group_channels';
export const CHAT_BASE_URL = `https://api-${process.env.CHAT_APPLICATION_ID}.sendbird.com/v3/`;

export const createMerchantAccount = async (req, res) => {
  try {
    if (req.user.roleCode === ROLE_CODE.PEOPLE && !req.user.availableGuru) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const {
      individual, business,
      destination, funding, tosAccepted,
    } = req.body;
    const merchantAccount = await braintree.createMerchantAccount(
      req.user.userId,
      individual,
      business,
      funding,
      destination,
      tosAccepted,
    );
    if (merchantAccount) {
      await Users.findByIdAndUpdate(
        req.user.userId,
        {
          isMerchantAccount: true,
          dateUpdate: new Date(),
        },
      );
    }
    return successResponse(req, res, merchantAccount);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const updateMerchantAccount = async (req, res) => {
  try {
    if (req.user.roleCode === ROLE_CODE.PEOPLE && !req.user.availableGuru) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const {
      individual, business,
      destination, funding, tosAccepted,
    } = req.body;
    const merchantAccount = await braintree.updateMerchantAccount(
      req.user.userId,
      individual,
      business,
      funding,
      destination,
      tosAccepted,
    );
    if (merchantAccount) {
      await Users.findByIdAndUpdate(
        req.user.userId,
        {
          isMerchantAccount: true,
          dateUpdate: new Date(),
        },
      );
    }
    return successResponse(req, res, merchantAccount);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const generateToken = async (req, res) => {
  try {
    const token = await braintree.generateToken();
    return successResponse(req, res, token);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getPaymentMethod = async (req, res) => {
  try {
    let result = {};
    if (req.user.roleCode === ROLE_CODE.PEOPLE && !req.user.availableGuru) {
      result = {
        customer: await braintree.getPaymentMethodsByCustomerId(req.user.userId),
      };
    } else {
      result.customer = await braintree.getPaymentMethodsByCustomerId(req.user.userId);
      result.merchant = await braintree.getPaymentMethodsByMerchantId(req.user.userId);
    }
    result.merchantAccount = req.user.isMerchantAccount;
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const createPaymentMethod = async (req, res) => {
  try {
    const { paymentMethodNonce } = req.body;
    console.log('::::::::paymentMethodNonce::::::::', paymentMethodNonce);
    const paymentMethod = await braintree.createPaymentMethod(
      req.user.userId,
      paymentMethodNonce,
    );
    if (paymentMethod) {
      await Users.findByIdAndUpdate(req.user.userId,
        {
          paymentMethodNonce,
          dateUpdate: new Date(),
        });
    }
    return successResponse(req, res, paymentMethod);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const deletePaymentMethod = async (req, res) => {
  try {
    console.log('deletepayment***********');
    const result = await braintree.deletePaymentMethod(req.body.paymentMethodToken);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const defaultPaymentMethod = async (req, res) => {
  try {
    const result = await braintree.defaultPaymentMethod(req.body.paymentMethodToken);
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const findTransactionsByUserId = async (req, res) => {
  try {
    if ((req.user.roleCode === ROLE_CODE.PEOPLE && req.user.availableGuru)
      || (req.user.roleCode !== ROLE_CODE.PEOPLE)) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const transaction = await Transactions.findById(req.user.userId);
    return successResponse(req, res, transaction);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const createTransactionIndividual = async (req, res) => {
  try {
    let result = {};
    let booking = await Bookings.findById(req.body.bookingId)
      .populate({
        path: 'user',
        select: {
          _id: 1,
          paypalEmail: 1,
          isMerchantAccount: 1,
          defaultPayout: 1,
          firstName: 1,
          lastName: 1,
        },
      })
      .populate({
        path: 'traveller',
        select: {
          _id: 1,
          isFirstBooking: 1,
          fromCoupon: 1,
          firstName: 1,
          lastName: 1,
        },
      });
    if (!booking) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (booking.bookingStatus === BOOKING_STATUS.ACCEPTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_ACCEPTED);
    }
    if (booking.bookingStatus === BOOKING_STATUS.REJECTED) {
      throw new Error(ERROR_MESSAGE.BOOKING_ALREADY_REJECTED);
    }
    if ((booking.user.paypalEmail === '')
      && (!booking.user.isMerchantAccount)) {
      throw new Error(ERROR_MESSAGE.MERCHANT_ACCOUNT_OR_PAYPALEMAIL_NOT_FOUND);
    }
    await Bookings.findByIdAndUpdate(
      booking.id, { bookingStatus: BOOKING_STATUS.ACCEPTED, dateUpdate: new Date() },
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
        tourDiscount: 1,
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
    const mailDate = new Date(response.selectedDate).toDateString();
    const serviceFee = (response.cost - (response.cost / 1.15)).toFixed(2);
    const serviceFeeIN = (((response.cost / 1.15) * 10) / 100).toFixed(2);
    const userAmount = (response.cost - serviceFeeIN - serviceFee).toFixed(2);
    let tourDiscount = 0;
    let disc;
    if (Number(response.totalRiders) >= Number(response.availability.tourDiscount.people)) {
      tourDiscount = ((response.availability.price * response.totalRiders)
        * Number(response.availability.tourDiscount.discount)) / 100;
      disc = response.availability.tourDiscount.discount;
    } else {
      disc = 0;
    }
    const mailUserAccept = {
      greetingName: response.user.firstName,
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: `${response.user.firstName} ${response.user.lastName}`,
      serviceFee,
      serviceFeeIN,
      mailDate,
      mailRideCategory,
      userAmount,
      tourDiscount,
      disc,
    };
    await bookingController.addBookingHistory(
      booking.id, booking.bookingStatus, response.bookingStatus,
    );
    // add notification
    await Notifications.create({
      userTo: booking.traveller,
      userFrom: booking.user,
      bookingDetails: booking.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: booking.user,
      userFrom: booking.traveller,
      bookingDetails: booking.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    await UserActivities.create({ user: response.user.id, activity: 'Accepted Booking' });
    let amount;
    let selectedHour = booking.time.slice(0, 2);
    const selectedFormat = booking.time.slice(6, 8);
    const hours = 10;
    if ((selectedFormat === 'PM') && (Number(selectedHour) < 12)) {
      selectedHour = Number(selectedHour) + 12;
    }
    const currentDate = moment().format('YYYY-MM-DD');
    const nextBookingDate = moment().add(1, 'days').format('YYYY-MM-DD');
    if (((booking.selectedDate === currentDate) && (Number(selectedHour) > Number(hours)))
      || ((booking.selectedDate === nextBookingDate) && (Number(selectedHour) < Number(hours)))) {
      if (booking.traveller.isFirstBooking && booking.traveller.fromCoupon) {
        amount = Number(booking.cost) - ((Number(booking.cost) * 25) / 100);
      } else {
        amount = booking.cost;
      }
      const mailMerchant = {
        traveller: `${booking.traveller.firstName} ${booking.traveller.lastName}`,
        user: `${booking.user.firstName} ${booking.user.lastName}`,
        serviceFee,
        serviceFeeIN,
        mailDate,
        userAmount,
        tourDiscount,
      };
      const guru = booking.user;
      guru.serviceFeeAmount = SERVICE_FREE_AMOUNT;
      guru.mailDetails = mailMerchant;
      if (amount === 0) {
        booking = await Bookings.findByIdAndUpdate(booking.id,
          { payment: true, bookingStatus: BOOKING_STATUS.ACCEPTED, dateUpdate: new Date() });
        const transactionDetails = {
          user: req.user.userId,
          booking: booking.id,
          transactionId: '',
          status: STATUS_TRANSACTION.SALE,
          cost: booking.cost,
        };
        result = await Transactions.create(transactionDetails);
        await Notifications.create({
          userTo: booking.user,
          userFrom: booking.traveller,
          bookingDetails: booking.id,
          notificationType: BOOKING_STATUS.PAYMENT_DONE,
          type: NOTIFICATION_TYPE.GURU,
        });
        await Notifications.create({
          userTo: booking.traveller,
          userFrom: booking.user,
          bookingDetails: booking.id,
          notificationType: BOOKING_STATUS.PAYMENT_DONE,
          type: NOTIFICATION_TYPE.TRAVELLER,
        });
      } else {
        const transaction = await braintree.createTransaction(
          amount,
          booking.user.id,
          guru,
          booking.paymentMethodToken,
          req.user.paymentMethodNonce || '',
        );
        if (transaction) {
          booking = await Bookings.findByIdAndUpdate(booking.id,
            { payment: true, dateUpdate: new Date() });
          const transactionDetails = {
            user: req.user.userId,
            booking: booking.id,
            transactionId: transaction.id,
            status: STATUS_TRANSACTION.SALE,
            cost: transaction.amount,
          };
          result = await Transactions.create(transactionDetails);
          await Notifications.create({
            userTo: booking.user,
            userFrom: booking.traveller,
            bookingDetails: booking.id,
            notificationType: BOOKING_STATUS.PAYMENT_DONE,
            type: NOTIFICATION_TYPE.GURU,
          });
          await Notifications.create({
            userTo: booking.traveller,
            userFrom: booking.user,
            bookingDetails: booking.id,
            notificationType: BOOKING_STATUS.PAYMENT_DONE,
            type: NOTIFICATION_TYPE.TRAVELLER,
          });
        }
      }
      booking = await Bookings.findById(booking.id).populate({
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
          tourDiscount: 1,
        },
      });
      if (booking.payment) {
        if (req.user.fromCoupon) {
          const destinationUser = await Users.findOne({ couponCode: req.user.fromCoupon });
          if (!destinationUser) {
            throw ERROR_MESSAGE.USER_NOT_FOUND;
          }
          const bookingCount = destinationUser.bookingCount + Number(INCREMENT);
          await Users.findByIdAndUpdate(destinationUser.id, { bookingCount });
        }
      }
      const mailUser = {
        greetingName: booking.user.firstName,
        traveller: `${booking.traveller.firstName} ${booking.traveller.lastName}`,
        user: `${booking.user.firstName} ${booking.user.lastName}`,
        serviceFee,
        serviceFeeIN,
        mailDate,
        mailRideCategory,
        tourDiscount,
        disc,
      };
      /* EMAIL NOTIFICATION */
      if (req.user.roleCode === ROLE_CODE.TOURGUIDE) {
        if (booking.bikeRentalDetails.length !== 0) {
          await sendEmail(booking.traveller.email,
            `Your booking is confirmed for the tour: ${booking.availability.tourName}`,
            temp.travellerAcceptRequestTGBIKE(mailUser, booking));
          await sendEmail(booking.user.email,
            `You’ve confirmed a booking with ${mailUser.traveller}`,
            temp.hostAcceptRequestTGBIKE(mailUser, booking));
          await sendEmail(booking.user.email,
            'You’ve been paid!',
            temp.hostPaidTGBIKE(mailUser, booking));
        } else {
          await sendEmail(booking.traveller.email,
            `Your booking is confirmed for the tour: ${booking.availability.tourName}`,
            temp.travellerAcceptRequestTG(mailUser, booking));
          await sendEmail(booking.user.email,
            `You’ve confirmed a booking with ${mailUser.traveller}`,
            temp.hostAcceptRequestTG(mailUser, booking));
          await sendEmail(booking.user.email,
            'You’ve been paid!',
            temp.hostPaidTG(mailUser, booking));
        }
      } else {
        await sendEmail(booking.traveller.email, `Your booking is confirmed with ${mailUser.user}`, temp.travellerAcceptRequestIn(mailUser, booking));
        await sendEmail(booking.user.email, `You’ve confirmed a booking with ${mailUser.traveller}`, temp.hostAcceptRequestIn(mailUser, booking));
        await sendEmail(booking.user.email, 'You’ve been paid!', temp.hostPaidIn(mailUser, booking));
      }
      /* PUSH NOTIFICATION */

      let travelerName = `${booking.traveller.firstName} ${booking.traveller.lastName}`;
      let hostName = `${booking.user.firstName} ${booking.user.lastName}`;
      if (booking.traveller.roleCode === ROLE_CODE.BUSINESS) {
        travelerName = booking.traveller.businessName;
      }
      if (booking.user.roleCode === ROLE_CODE.BUSINESS) {
        hostName = booking.user.businessName;
      }
      const chatData = {
        message_type: 'MESG',
        user_id: booking.traveller.id,
        message: 'Payment Done',
        custom_type: 'PAYMENT_DONE',
        data: JSON.stringify({
          travelerName,
          hostName,
          duration: booking.duration,
          date: booking.selectedDate,
          time: booking.time,
          extraRiders: booking.additionalRiders,
          tourPrize: booking.cost,
          bookingId: booking.id,
          hostId: booking.user.id,
          travellerId: booking.traveller.id,
        }),
      };
      const apiUrl = `${CHAT_BASE_URL}group_channels/${booking.channelUrl}/messages`;
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': process.env.CHAT_MASTER_API_TOKEN,
        },
      };
      await axios.post(apiUrl, JSON.stringify(chatData), options);
      const option2 = {
        headers: {
          Authorization: `Basic ${process.env.AUTH_KEY}`,
          'Content-Type': 'application/json',
          Host: 'onesignal.com',
        },
      };
      const url = 'https://onesignal.com/api/v1/notifications';
      const data2 = {
        app_id: process.env.APP_ID,
        include_player_ids: [
          booking.user.currentLoggedInDeviceId,
        ],
        data: {
          type: 'acceptBooking',
        },
        headings: { en: 'You’ve been paid!' },
        contents: {
          en: 'Your traveler has paid for their booking with you. Tap here to view more details',
        },
      };
      await axios.post(url, JSON.stringify(data2), option2);
      await UserActivities.create({ user: booking.traveller.id, activity: 'Payment Done' });
    } else {
      // eslint-disable-next-line no-lonely-if
      if (req.user.roleCode === ROLE_CODE.TOURGUIDE) {
        if (booking.bikeRentalDetails.length !== 0) {
          await sendEmail(response.traveller.email,
            `Your booking is confirmed for the tour: ${response.availability.tourName}`,
            temp.travellerAcceptRequestTGBIKE(mailUserAccept, response));
          await sendEmail(response.user.email,
            `You’ve confirmed a booking with ${mailUserAccept.traveller}`,
            temp.hostAcceptRequestTGBIKE(mailUserAccept, response));
        } else {
          await sendEmail(response.traveller.email,
            `Your booking is confirmed for the tour: ${response.availability.tourName}`,
            temp.travellerAcceptRequestTG(mailUserAccept, response));
          await sendEmail(response.user.email,
            `You’ve confirmed a booking with ${mailUserAccept.traveller}`,
            temp.hostAcceptRequestTG(mailUserAccept, response));
        }
      } else {
        await sendEmail(response.traveller.email, `Your booking is confirmed with ${mailUserAccept.user}`, temp.travellerAcceptRequestIn(mailUserAccept, response));
        await sendEmail(response.user.email, `You’ve confirmed a booking with ${mailUserAccept.traveller}`, temp.hostAcceptRequestIn(mailUserAccept, response));
      }
    }
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const createTransactionBusiness = async (req, res) => {
  try {
    let result = {};
    let booking = await Bookings.findById(req.body.bookingId)
      .populate({
        path: 'user',
        select: {
          _id: 1,
          paypalEmail: 1,
          isMerchantAccount: 1,
          defaultPayout: 1,
          firstName: 1,
          lastName: 1,
        },
      })
      .populate({
        path: 'traveller',
        select: {
          _id: 1,
          isFirstBooking: 1,
          fromCoupon: 1,
          firstName: 1,
          lastName: 1,
        },
      });
    if (!booking) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    if (req.user.userId === booking.user.id) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    let amount;
    if (booking.traveller.isFirstBooking && booking.traveller.fromCoupon) {
      amount = Number(booking.cost) - ((Number(booking.cost) * 25) / 100);
    } else {
      amount = booking.cost;
    }
    const mailDate = new Date(booking.selectedDate).toDateString();
    const mailMerchant = {
      traveller: `${booking.traveller.firstName} ${booking.traveller.lastName}`,
      user: `${booking.user.firstName} ${booking.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
      price: amount,
    };
    const guru = booking.user;
    guru.serviceFeeAmount = SERVICE_FREE_AMOUNT;
    guru.mailDetails = mailMerchant;
    if (amount === 0) {
      booking = await Bookings.findByIdAndUpdate(booking.id,
        { payment: true, dateUpdate: new Date() });
      const transactionDetails = {
        user: req.user.userId,
        booking: booking.id,
        transactionId: '',
        status: STATUS_TRANSACTION.SALE,
        cost: booking.cost,
      };
      result = await Transactions.create(transactionDetails);
    } else {
      const transaction = await braintree.createTransaction(
        amount,
        booking.user.id,
        guru,
        req.body.paymentMethodToken,
        req.user.paymentMethodNonce || '',
      );
      if (transaction) {
        booking = await Bookings.findByIdAndUpdate(booking.id,
          { payment: true, bookingStatus: BOOKING_STATUS.ACCEPTED, dateUpdate: new Date() });
        const transactionDetails = {
          user: req.user.userId,
          booking: booking.id,
          transactionId: transaction.id,
          status: STATUS_TRANSACTION.SALE,
          cost: transaction.amount,
        };
        result = await Transactions.create(transactionDetails);
      } else {
        booking = await Bookings.findByIdAndUpdate(booking.id,
          { bookingStatus: BOOKING_STATUS.REJECTED, dateUpdate: new Date() });
        const transactionDetails = {
          user: req.user.userId,
          booking: booking.id,
          transactionId: transaction.id,
          status: STATUS_TRANSACTION.PENDING_CANCELED,
          cost: booking.cost,
        };
        result = await Transactions.create(transactionDetails);
      }
    }
    const selectObject = {
      user: 1,
      traveller: 1,
      availability: 1,
      bookingStatus: 1,
      selectedDate: 1,
      time: 1,
      totalRiders: 1,
      additionalRiders: 1,
      payment: 1,
      dateCreate: 1,
      cost: 1,
    };
    booking = await Bookings.findById(booking.id).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        tourName: 1,
        price: 1,
      },
    })
      .select(selectObject);
    if (booking.payment) {
      if (req.user.fromCoupon) {
        const destinationUser = await Users.findOne({ couponCode: req.user.fromCoupon });
        if (!destinationUser) {
          throw ERROR_MESSAGE.USER_NOT_FOUND;
        }
        const bookingCount = destinationUser.bookingCount + Number(INCREMENT);
        await Users.findByIdAndUpdate(destinationUser.id, { bookingCount });
      }
    }
    await bookingController.addBookingHistory(
      booking.id,
      BOOKING_STATUS.REQUESTED,
      booking.bookingStatus,
    );
    // add notification
    await Notifications.create({
      userTo: booking.user.id,
      userFrom: booking.traveller,
      bookingDetails: booking.id,
      notificationType: BOOKING_STATUS.PAYMENT_DONE,
      type: NOTIFICATION_TYPE.GURU,
    });
    await Notifications.create({
      userTo: booking.traveller,
      userFrom: booking.user.id,
      bookingDetails: booking.id,
      notificationType: BOOKING_STATUS.PAYMENT_DONE,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    booking.signature = '';
    const mailUser = {
      traveller: `${booking.traveller.firstName} ${booking.traveller.lastName}`,
      user: `${booking.user.firstName} ${booking.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
      price: booking.cost,
    };
    await sendEmail(booking.user.email, 'Host Payment Successful', templates.paymentNotifyGuru(mailUser));
    await sendEmail(booking.traveller.email, 'Traveler Payment Successful', templates.paymentNotifyTraveller(mailUser));
    await UserActivities.create({ user: booking.traveller.id, activity: 'Payment Done' });
    return successResponse(req, res, { result, booking });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const createTransactionTourGuide = async (req, res) => {
  try {
    let result = {};
    let booking = await Bookings.findById(req.body.bookingId);
    if (!booking) {
      throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
    }
    booking = await Bookings.findById(booking.id)
      .populate({
        path: 'user',
        select: {
          _id: 1,
          paypalEmail: 1,
          isMerchantAccount: 1,
          defaultPayout: 1,
          firstName: 1,
          lastName: 1,
        },
      })
      .populate({
        path: 'traveller',
        select: {
          _id: 1,
          isFirstBooking: 1,
          fromCoupon: 1,
          firstName: 1,
          lastName: 1,
        },
      });
    await Notifications.create({
      userTo: booking.traveller,
      userFrom: booking.user.id,
      bookingDetails: booking.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await Notifications.create({
      userTo: booking.user.id,
      userFrom: booking.traveller,
      bookingDetails: booking.id,
      notificationType: BOOKING_STATUS.ACCEPTED,
      type: NOTIFICATION_TYPE.GURU,
    });
    let amount;
    if (booking.traveller.isFirstBooking && booking.traveller.fromCoupon) {
      amount = Number(booking.cost) - ((Number(booking.cost) * 25) / 100);
    } else {
      amount = booking.cost;
    }
    const mailDate = new Date(booking.selectedDate).toDateString();
    const mailMerchant = {
      traveller: `${booking.traveller.firstName} ${booking.traveller.lastName}`,
      user: `${booking.user.firstName} ${booking.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
      price: amount,
    };
    const guru = booking.user;
    guru.serviceFeeAmount = TOURGUIDE_SERVICE_FREE_AMOUNT;
    guru.mailDetails = mailMerchant;
    if (amount === 0) {
      booking = await Bookings.findByIdAndUpdate(booking.id,
        { payment: true, dateUpdate: new Date() });
      const transactionDetails = {
        user: req.user.userId,
        booking: booking.id,
        transactionId: '',
        status: STATUS_TRANSACTION.SALE,
        cost: booking.cost,
      };
      result = await Transactions.create(transactionDetails);
      await Notifications.create({
        userTo: booking.traveller,
        userFrom: booking.user,
        bookingDetails: booking.id,
        notificationType: BOOKING_STATUS.PAYMENT_DONE,
        type: NOTIFICATION_TYPE.TRAVELLER,
      });
      await Notifications.create({
        userTo: booking.user,
        userFrom: booking.traveller,
        bookingDetails: booking.id,
        notificationType: BOOKING_STATUS.PAYMENT_DONE,
        type: NOTIFICATION_TYPE.GURU,
      });
    } else {
      const transaction = await braintree.createTransaction(
        amount,
        booking.user.id,
        guru,
        booking.paymentMethodToken,
        req.user.paymentMethodNonce || '',
      );
      if (transaction) {
        await Bookings.findByIdAndUpdate(booking.id,
          { payment: true, dateUpdate: new Date() });
        const transactionDetails = {
          user: req.user.userId,
          booking: booking.id,
          transactionId: transaction.id,
          status: STATUS_TRANSACTION.SALE,
          cost: transaction.amount,
        };
        result = await Transactions.create(transactionDetails);
        await Notifications.create({
          userTo: booking.traveller,
          userFrom: booking.user.id,
          bookingDetails: booking.id,
          notificationType: BOOKING_STATUS.PAYMENT_DONE,
          type: NOTIFICATION_TYPE.TRAVELLER,
        });
        await Notifications.create({
          userTo: booking.user.id,
          userFrom: booking.traveller,
          bookingDetails: booking.id,
          notificationType: BOOKING_STATUS.PAYMENT_DONE,
          type: NOTIFICATION_TYPE.GURU,
        });
      } else {
        const transactionDetails = {
          user: req.user.userId,
          booking: booking.id,
          transactionId: transaction.id,
          status: STATUS_TRANSACTION.PENDING_CANCELED,
          cost: booking.cost,
        };
        result = await Transactions.create(transactionDetails);
        await Notifications.create({
          userTo: booking.traveller,
          userFrom: booking.user.id,
          bookingDetails: booking.id,
          notificationType: BOOKING_STATUS.PAYMENT_FAILED,
          type: NOTIFICATION_TYPE.TRAVELLER,
        });
        await Notifications.create({
          userTo: booking.user.id,
          userFrom: booking.traveller,
          bookingDetails: booking.id,
          notificationType: BOOKING_STATUS.PAYMENT_FAILED,
          type: NOTIFICATION_TYPE.GURU,
        });
      }
    }
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
    if (response.payment) {
      if (req.user.fromCoupon) {
        const destinationUser = await Users.findOne({ couponCode: req.user.fromCoupon });
        if (!destinationUser) {
          throw ERROR_MESSAGE.USER_NOT_FOUND;
        }
        const bookingCount = destinationUser.bookingCount + Number(INCREMENT);
        await Users.findByIdAndUpdate(destinationUser.id, { bookingCount });
      }
    }
    await bookingController.addBookingHistory(
      booking.id,
      booking.bookingStatus,
      response.bookingStatus,
    );
    const mailUser = {
      traveller: `${response.traveller.firstName} ${response.traveller.lastName}`,
      user: `${response.user.firstName} ${response.user.lastName}`,
      selectedDate: `${mailDate.slice(8, 10)} ${mailDate.slice(4, 7)}, ${mailDate.slice(11, 15)}`,
      price: response.cost,
    };
    await sendEmail(response.user.email, 'Host Payment Successful', templates.paymentNotifyGuru(mailUser));
    await sendEmail(response.traveller.email, 'Traveler Payment Successful', templates.paymentNotifyTourGuideTraveller(mailUser));
    response.signature = '';
    await UserActivities.create({ user: response.user.id, activity: 'Booking Accepted & Payment Done' });
    return successResponse(req, res, { response, result });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const addTourGuidePaymentToken = async (req, res) => {
  try {
    let booking = await Bookings.findByIdAndUpdate(req.body.bookingId,
      { paymentMethodToken: req.body.paymentMethodToken, dateUpdate: new Date() });
    booking = await Bookings.findById(booking.id);
    booking.signature = '';
    await Notifications.create({
      userTo: booking.user,
      userFrom: booking.traveller,
      bookingDetails: booking.id,
      notificationType: booking.bookingStatus,
      type: NOTIFICATION_TYPE.GURU,
    });
    await Notifications.create({
      userTo: booking.traveller,
      userFrom: booking.user,
      bookingDetails: booking.id,
      notificationType: booking.bookingStatus,
      type: NOTIFICATION_TYPE.TRAVELLER,
    });
    await bookingController.addBookingHistory(booking.id, BOOKING_STATUS.NONE, booking.bookingStatus);
    return successResponse(req, res, booking);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const createTransaction = async () => {
  try {
    let bookingDetail;
    const bookingDate = moment().format('YYYY-MM-DD');
    const booking = await Bookings.find({
      bookingStatus: BOOKING_STATUS.ACCEPTED,
      payment: false,
      selectedDate: bookingDate,
    }).populate({
      path: 'user',
      select: {
        _id: 1,
        paypalEmail: 1,
        isMerchantAccount: 1,
        defaultPayout: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        businessName: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        isFirstBooking: 1,
        fromCoupon: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        businessName: 1,
      },
    }).populate({
      path: 'availability',
    });
    if (booking.length) {
      for (let i = 0; i < booking.length; i++) {
        let amount;
        if (booking[i].traveller.isFirstBooking && booking[i].traveller.fromCoupon) {
          amount = Number(booking[i].cost) - ((Number(booking[i].cost) * 25) / 100);
        } else {
          amount = booking[i].cost;
        }
        let tourDiscount = 0;
        let disc;
        if (Number(booking[i].totalRiders) >= Number(booking[i].availability.tourDiscount.people)) {
          tourDiscount = ((booking[i].availability.price * booking[i].totalRiders)
            * Number(booking[i].availability.tourDiscount.discount)) / 100;
          disc = booking[i].availability.tourDiscount.discount;
        } else {
          disc = 0;
        }
        let mailRideCategory;
        if (booking[i].availability.rideCategory[0].checked === true
          && booking[i].availability.rideCategory[1].checked === true) {
          mailRideCategory = `${booking[i].availability.rideCategory[0].key}, ${booking[i].availability.rideCategory[1].key}`;
        } else if (booking[i].availability.rideCategory[0].checked === true) {
          mailRideCategory = booking[i].availability.rideCategory[0].key;
        } else if (booking[i].availability.rideCategory[1].checked === true) {
          mailRideCategory = booking[i].availability.rideCategory[1].key;
        } else {
          mailRideCategory = 'Not Specified';
        }
        const mailDate = new Date(booking[i].selectedDate).toDateString();
        const serviceFee = (booking[i].cost - (booking[i].cost / 1.15)).toFixed(2);
        const serviceFeeIN = (((booking[i].cost / 1.15) * 10) / 100).toFixed(2);
        const userAmount = (booking[i].cost - serviceFeeIN - serviceFee).toFixed(2);
        const mailMerchant = {
          traveller: `${booking[i].traveller.firstName} ${booking[i].traveller.lastName}`,
          user: `${booking[i].user.firstName} ${booking[i].user.lastName}`,
          serviceFee,
          serviceFeeIN,
          mailDate,
          userAmount,
          tourDiscount,
          disc,
        };
        const guru = booking[i].user;
        guru.serviceFeeAmount = SERVICE_FREE_AMOUNT;
        guru.mailDetails = mailMerchant;
        if (amount === 0) {
          bookingDetail = await Bookings.findByIdAndUpdate(booking[i].id,
            { payment: true, dateUpdate: new Date() });
          const transactionDetails = {
            user: booking[i].traveller.id,
            booking: booking[i].id,
            transactionId: '',
            status: STATUS_TRANSACTION.SALE,
            cost: booking[i].cost,
          };
          await Transactions.create(transactionDetails);
          await Notifications.create({
            userTo: booking[i].user.id,
            userFrom: booking[i].traveller.id,
            bookingDetails: booking[i].id,
            notificationType: BOOKING_STATUS.PAYMENT_DONE,
            type: NOTIFICATION_TYPE.GURU,
          });
          await Notifications.create({
            userTo: booking[i].traveller.id,
            userFrom: booking[i].user.id,
            bookingDetails: booking[i].id,
            notificationType: BOOKING_STATUS.PAYMENT_DONE,
            type: NOTIFICATION_TYPE.TRAVELLER,
          });
        } else {
          const transaction = await braintree.createTransaction(
            amount,
            booking[i].user.id,
            guru,
            booking[i].paymentMethodToken,
            booking[i].traveller.paymentMethodNonce || '',
          );
          if (transaction) {
            bookingDetail = await Bookings.findByIdAndUpdate(booking[i].id,
              { payment: true, dateUpdate: new Date() });
            const transactionDetails = {
              user: booking[i].traveller.id,
              booking: booking[i].id,
              transactionId: transaction.id,
              status: STATUS_TRANSACTION.SALE,
              cost: transaction.amount,
            };
            await Transactions.create(transactionDetails);
            await Notifications.create({
              userTo: booking[i].user.id,
              userFrom: booking[i].traveller.id,
              bookingDetails: booking[i].id,
              notificationType: BOOKING_STATUS.PAYMENT_DONE,
              type: NOTIFICATION_TYPE.GURU,
            });
            await Notifications.create({
              userTo: booking[i].traveller.id,
              userFrom: booking[i].user.id,
              bookingDetails: booking[i].id,
              notificationType: BOOKING_STATUS.PAYMENT_DONE,
              type: NOTIFICATION_TYPE.TRAVELLER,
            });
          }
          bookingDetail = await Bookings.findById(booking[i].id).populate({
            path: 'user',
            select: {
              _id: 1,
              firstName: 1,
              lastName: 1,
              email: 1,
              currentLoggedInDeviceId: 1,
              fromCoupon: 1,
            },
          }).populate({
            path: 'traveller',
            select: {
              _id: 1,
              firstName: 1,
              lastName: 1,
              email: 1,
              currentLoggedInDeviceId: 1,
              fromCoupon: 1,
            },
          }).populate({
            path: 'availability',
          });
          if (bookingDetail.payment) {
            if (bookingDetail.traveller.fromCoupon) {
              const destinationUser = await Users.findOne({
                couponCode: bookingDetail.traveller.fromCoupon,
              });
              if (!destinationUser) {
                throw ERROR_MESSAGE.USER_NOT_FOUND;
              }
              const bookingCount = destinationUser.bookingCount + Number(INCREMENT);
              await Users.findByIdAndUpdate(destinationUser.id, { bookingCount });
            }
          }
          const mailUser = {
            greetingName: bookingDetail.traveller.firstName,
            greetingUser: bookingDetail.user.firstName,
            traveller: `${bookingDetail.traveller.firstName} ${bookingDetail.traveller.lastName}`,
            user: `${bookingDetail.user.firstName} ${bookingDetail.user.lastName}`,
            price: bookingDetail.cost,
            tourDiscount,
            disc,
            serviceFee,
            serviceFeeIN,
            userAmount,
            mailRideCategory,
            mailDate,
          };
          if (bookingDetail.user.roleCode === ROLE_CODE.TOURGUIDE) {
            if (bookingDetail.bikeRentalDetails.length !== 0) {
              await sendEmail(bookingDetail.user.email,
                'You’ve been paid!',
                temp.hostPaidTGBIKE(mailUser, bookingDetail));
            } else {
              await sendEmail(bookingDetail.user.email,
                'You’ve been paid!',
                temp.hostPaidTG(mailUser, bookingDetail));
            }
          } else {
            await sendEmail(bookingDetail.user.email, 'You’ve been paid!', temp.hostPaidIn(mailUser, bookingDetail));
          }
          await UserActivities.create({ user: bookingDetail.traveller.id, activity: 'Payment Done' });
          let travelerName = `${bookingDetail.traveller.firstName} ${bookingDetail.traveller.lastName}`;
          let hostName = `${bookingDetail.user.firstName} ${bookingDetail.user.lastName}`;
          if (bookingDetail.traveller.roleCode === ROLE_CODE.BUSINESS) {
            travelerName = bookingDetail.traveller.businessName;
          }
          if (bookingDetail.user.roleCode === ROLE_CODE.BUSINESS) {
            hostName = bookingDetail.user.businessName;
          }
          const chatData = {
            message_type: 'MESG',
            user_id: bookingDetail.traveller.id,
            message: 'Payment Done',
            custom_type: 'PAYMENT_DONE',
            data: JSON.stringify({
              travelerName,
              hostName,
              duration: bookingDetail.duration,
              date: bookingDetail.selectedDate,
              time: bookingDetail.time,
              extraRiders: bookingDetail.additionalRiders,
              tourPrize: bookingDetail.cost,
              bookingId: bookingDetail.id,
              hostId: bookingDetail.user.id,
              travellerId: bookingDetail.traveller.id,
            }),
          };
          const apiUrl = `${CHAT_BASE_URL}group_channels/${bookingDetail.channelUrl}/messages`;
          const options = {
            headers: {
              'Content-Type': 'application/json',
              'Api-Token': process.env.CHAT_MASTER_API_TOKEN,
            },
          };
          await axios.post(apiUrl, JSON.stringify(chatData), options);
          const option2 = {
            headers: {
              Authorization: `Basic ${process.env.AUTH_KEY}`,
              'Content-Type': 'application/json',
              Host: 'onesignal.com',
            },
          };
          const url = 'https://onesignal.com/api/v1/notifications';
          const data2 = {
            app_id: process.env.APP_ID,
            include_player_ids: [
              bookingDetail.user.currentLoggedInDeviceId,
            ],
            data: {
              type: 'acceptBooking',
            },
            headings: { en: 'You’ve been paid!' },
            contents: {
              en: 'Your traveler has paid for their booking with you. Tap here to view more details',
            },
          };
          await axios.post(url, JSON.stringify(data2), option2);
        }
      }
    }
    const nextBookingDate = moment().add(1, 'days').format('YYYY-MM-DD');
    const tomorrowsBooking = await Bookings.find({
      bookingStatus: BOOKING_STATUS.ACCEPTED,
      payment: false,
      selectedDate: nextBookingDate,
    }).populate({
      path: 'user',
      select: {
        _id: 1,
        paypalEmail: 1,
        isMerchantAccount: 1,
        defaultPayout: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        businessName: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        isFirstBooking: 1,
        fromCoupon: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        businessName: 1,
      },
    }).populate({
      path: 'availability',
    });
    if (tomorrowsBooking.length) {
      for (let i = 0; i < tomorrowsBooking.length; i++) {
        let selectedHour = tomorrowsBooking[i].time.slice(0, 2);
        const selectedFormat = tomorrowsBooking[i].time.slice(6, 8);
        const hours = 10;
        if ((selectedFormat === 'PM') && (Number(selectedHour) < 12)) {
          selectedHour = Number(selectedHour) + 12;
        }
        if (Number(selectedHour) < Number(hours)) {
          let amount;
          if (tomorrowsBooking[i].traveller.isFirstBooking
            && tomorrowsBooking[i].traveller.fromCoupon) {
            amount = Number(tomorrowsBooking[i].cost)
              - ((Number(tomorrowsBooking[i].cost) * 25) / 100);
          } else {
            amount = tomorrowsBooking[i].cost;
          }
          let tourDiscount = 0;
          let disc;
          if (Number(tomorrowsBooking[i].totalRiders) >= Number(tomorrowsBooking[i].availability.tourDiscount.people)) {
            tourDiscount = ((tomorrowsBooking[i].availability.price * tomorrowsBooking[i].totalRiders)
              * Number(tomorrowsBooking[i].availability.tourDiscount.discount)) / 100;
            disc = tomorrowsBooking[i].availability.tourDiscount.discount;
          } else {
            disc = 0;
          }
          let mailRideCategory;
          if (tomorrowsBooking[i].availability.rideCategory[0].checked === true
            && tomorrowsBooking[i].availability.rideCategory[1].checked === true) {
            mailRideCategory = `${tomorrowsBooking[i].availability.rideCategory[0].key}, ${tomorrowsBooking[i].availability.rideCategory[1].key}`;
          } else if (tomorrowsBooking[i].availability.rideCategory[0].checked === true) {
            mailRideCategory = tomorrowsBooking[i].availability.rideCategory[0].key;
          } else if (tomorrowsBooking[i].availability.rideCategory[1].checked === true) {
            mailRideCategory = tomorrowsBooking[i].availability.rideCategory[1].key;
          } else {
            mailRideCategory = 'Not Specified';
          }
          const mailDate = new Date(tomorrowsBooking[i].selectedDate).toDateString();
          const serviceFee = (tomorrowsBooking[i].cost - (tomorrowsBooking[i].cost / 1.15)).toFixed(2);
          const serviceFeeIN = (((tomorrowsBooking[i].cost / 1.15) * 10) / 100).toFixed(2);
          const userAmount = (tomorrowsBooking[i].cost - serviceFeeIN - serviceFee).toFixed(2);
          const mailMerchant = {
            traveller: `${tomorrowsBooking[i].traveller.firstName} ${tomorrowsBooking[i].traveller.lastName}`,
            user: `${tomorrowsBooking[i].user.firstName} ${tomorrowsBooking[i].user.lastName}`,
            serviceFee,
            serviceFeeIN,
            mailDate,
            userAmount,
            tourDiscount,
            disc,
          };
          const guru = tomorrowsBooking[i].user;
          guru.serviceFeeAmount = SERVICE_FREE_AMOUNT;
          guru.mailDetails = mailMerchant;
          if (amount === 0) {
            bookingDetail = await Bookings.findByIdAndUpdate(tomorrowsBooking[i].id,
              { payment: true, dateUpdate: new Date() });
            const transactionDetails = {
              user: tomorrowsBooking[i].traveller.id,
              booking: tomorrowsBooking[i].id,
              transactionId: '',
              status: STATUS_TRANSACTION.SALE,
              cost: tomorrowsBooking[i].cost,
            };
            await Transactions.create(transactionDetails);
            await Notifications.create({
              userTo: tomorrowsBooking[i].user.id,
              userFrom: tomorrowsBooking[i].traveller.id,
              bookingDetails: tomorrowsBooking[i].id,
              notificationType: BOOKING_STATUS.PAYMENT_DONE,
              type: NOTIFICATION_TYPE.GURU,
            });
            await Notifications.create({
              userTo: tomorrowsBooking[i].traveller.id,
              userFrom: tomorrowsBooking[i].user.id,
              bookingDetails: tomorrowsBooking[i].id,
              notificationType: BOOKING_STATUS.PAYMENT_DONE,
              type: NOTIFICATION_TYPE.TRAVELLER,
            });
          } else {
            const transaction = await braintree.createTransaction(
              amount,
              tomorrowsBooking[i].user.id,
              guru,
              tomorrowsBooking[i].paymentMethodToken,
              tomorrowsBooking[i].traveller.paymentMethodNonce || '',
            );
            if (transaction) {
              bookingDetail = await Bookings.findByIdAndUpdate(tomorrowsBooking[i].id,
                { payment: true, dateUpdate: new Date() });
              const transactionDetails = {
                user: tomorrowsBooking[i].traveller.id,
                booking: tomorrowsBooking[i].id,
                transactionId: transaction.id,
                status: STATUS_TRANSACTION.SALE,
                cost: transaction.amount,
              };
              await Transactions.create(transactionDetails);
              await Notifications.create({
                userTo: tomorrowsBooking[i].user.id,
                userFrom: tomorrowsBooking[i].traveller.id,
                bookingDetails: tomorrowsBooking[i].id,
                notificationType: BOOKING_STATUS.PAYMENT_DONE,
                type: NOTIFICATION_TYPE.GURU,
              });
              await Notifications.create({
                userTo: tomorrowsBooking[i].traveller.id,
                userFrom: tomorrowsBooking[i].user.id,
                bookingDetails: tomorrowsBooking[i].id,
                notificationType: BOOKING_STATUS.PAYMENT_DONE,
                type: NOTIFICATION_TYPE.TRAVELLER,
              });
            }
            bookingDetail = await Bookings.findById(tomorrowsBooking[i].id).populate({
              path: 'user',
              select: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                currentLoggedInDeviceId: 1,
                fromCoupon: 1,
                roleCode: 1,
                businessName: 1,
              },
            }).populate({
              path: 'traveller',
              select: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                currentLoggedInDeviceId: 1,
                fromCoupon: 1,
                roleCode: 1,
                businessName: 1,
              },
            }).populate({
              path: 'availability',
            });
            if (bookingDetail.payment) {
              if (bookingDetail.traveller.fromCoupon) {
                const destinationUser = await Users.findOne({
                  couponCode: bookingDetail.traveller.fromCoupon,
                });
                if (!destinationUser) {
                  throw ERROR_MESSAGE.USER_NOT_FOUND;
                }
                const bookingCount = destinationUser.bookingCount + Number(INCREMENT);
                await Users.findByIdAndUpdate(destinationUser.id, { bookingCount });
              }
            }
            const mailUser = {
              greetingName: bookingDetail.traveller.firstName,
              greetingUser: bookingDetail.user.firstName,
              traveller: `${booking.traveller.firstName} ${booking.traveller.lastName}`,
              user: `${booking.user.firstName} ${booking.user.lastName}`,
              serviceFee,
              serviceFeeIN,
              mailDate,
              userAmount,
              tourDiscount,
              mailRideCategory,
              disc,
            };
            if (bookingDetail.user.roleCode === ROLE_CODE.TOURGUIDE) {
              if (bookingDetail.bikeRentalDetails.length !== 0) {
                await sendEmail(bookingDetail.user.email,
                  'You’ve been paid!',
                  temp.hostPaidTGBIKE(mailUser, bookingDetail));
              } else {
                await sendEmail(bookingDetail.user.email,
                  'You’ve been paid!',
                  temp.hostPaidTG(mailUser, bookingDetail));
              }
            } else {
              await sendEmail(bookingDetail.user.email, 'You’ve been paid!', temp.hostPaidIn(mailUser, bookingDetail));
            }
            await UserActivities.create({ user: bookingDetail.traveller.id, activity: 'Payment Done' });
            let travelerName = `${bookingDetail.traveller.firstName} ${bookingDetail.traveller.lastName}`;
            let hostName = `${bookingDetail.user.firstName} ${bookingDetail.user.lastName}`;
            if (bookingDetail.traveller.roleCode === ROLE_CODE.BUSINESS) {
              travelerName = bookingDetail.traveller.businessName;
            }
            if (bookingDetail.user.roleCode === ROLE_CODE.BUSINESS) {
              hostName = bookingDetail.user.businessName;
            }
            const chatData = {
              message_type: 'MESG',
              user_id: bookingDetail.traveller.id,
              message: 'Payment Done',
              custom_type: 'PAYMENT_DONE',
              data: JSON.stringify({
                travelerName,
                hostName,
                duration: bookingDetail.duration,
                date: bookingDetail.selectedDate,
                time: bookingDetail.time,
                extraRiders: bookingDetail.additionalRiders,
                tourPrize: bookingDetail.cost,
                bookingId: bookingDetail.id,
                hostId: bookingDetail.user.id,
                travellerId: bookingDetail.traveller.id,
              }),
            };
            const apiUrl = `${CHAT_BASE_URL}group_channels/${bookingDetail.channelUrl}/messages`;
            const options = {
              headers: {
                'Content-Type': 'application/json',
                'Api-Token': process.env.CHAT_MASTER_API_TOKEN,
              },
            };
            await axios.post(apiUrl, JSON.stringify(chatData), options);
            const option2 = {
              headers: {
                Authorization: `Basic ${process.env.AUTH_KEY}`,
                'Content-Type': 'application/json',
                Host: 'onesignal.com',
              },
            };
            const url = 'https://onesignal.com/api/v1/notifications';
            const data2 = {
              app_id: process.env.APP_ID,
              include_player_ids: [
                bookingDetail.user.currentLoggedInDeviceId,
              ],
              data: {
                type: 'acceptBooking',
              },
              headings: { en: 'You’ve been paid!' },
              contents: {
                en: 'Your traveler has paid for their booking with you. Tap here to view more details',
              },
            };
            await axios.post(url, JSON.stringify(data2), option2);
          }
        }
      }
    }
    return 1;
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
};

export const emailReminder = async () => {
  try {
    const bookingDate = moment().add(4, 'days').format('YYYY-MM-DD');
    console.log(bookingDate, 'bookingDate');
    const booking = await Bookings.find({
      bookingStatus: BOOKING_STATUS.ACCEPTED,
      selectedDate: bookingDate,
    }).populate({
      path: 'user',
      select: {
        _id: 1,
        paypalEmail: 1,
        isMerchantAccount: 1,
        defaultPayout: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        businessName: 1,
      },
    }).populate({
      path: 'traveller',
      select: {
        _id: 1,
        isFirstBooking: 1,
        fromCoupon: 1,
        firstName: 1,
        lastName: 1,
        roleCode: 1,
        businessName: 1,
      },
    }).populate({
      path: 'availability',
      select: {
        _id: 1,
        rideCategory: 1,
        price: 1,
        locationName: 1,
        tourName: 1,
        tourDiscount: 1,
      },
    });
    if (booking.length) {
      for (let i = 0; i < booking.length; i++) {
        let mailRideCategory;
        if (booking[i].availability.rideCategory[0].checked === true
          && booking[i].availability.rideCategory[1].checked === true) {
          mailRideCategory = `${booking[i].availability.rideCategory[0].key}, ${booking[i].availability.rideCategory[1].key}`;
        } else if (booking[i].availability.rideCategory[0].checked === true) {
          mailRideCategory = booking[i].availability.rideCategory[0].key;
        } else if (booking[i].availability.rideCategory[1].checked === true) {
          mailRideCategory = booking[i].availability.rideCategory[1].key;
        } else {
          mailRideCategory = 'Not Specified';
        }
        let tourDiscount = 0;
        let disc;
        if (Number(booking[i].totalRiders) >= Number(booking[i].availability.tourDiscount.people)) {
          tourDiscount = ((booking[i].availability.price * booking[i].totalRiders)
            * Number(booking[i].availability.tourDiscount.discount)) / 100;
          disc = booking[i].availability.tourDiscount.discount;
        } else {
          disc = 0;
        }
        const serviceFee = (booking[i].cost - (booking[i].cost / 1.15)).toFixed(2);
        const serviceFeeIN = (((booking[i].cost / 1.15) * 10) / 100).toFixed(2);
        const userAmount = (booking[i].cost - serviceFeeIN - serviceFee).toFixed(2);
        const mailDate = new Date(booking[i].selectedDate).toDateString();
        const mailUser = {
          greetingName: booking[i].user.firstName,
          traveller: `${booking[i].traveller.firstName} ${booking[i].traveller.lastName}`,
          user: `${booking[i].user.firstName} ${booking[i].user.lastName}`,
          mailRideCategory,
          mailDate,
          serviceFee,
          serviceFeeIN,
          userAmount,
          tourDiscount,
          disc,
        };
        if (booking[i].user.roleCode === ROLE_CODE.TOURGUIDE) {
          if (booking[i].bikeRentalDetails.length !== 0) {
            await sendEmail(booking.traveller.email,
              'Reminder - your tour is coming up soon',
              temp.travellerMeetingReminderTGBIKE(mailUser, booking[i]));
            await sendEmail(booking[i].user.email,
              'Reminder - you have a scheduled tour coming up soon',
              temp.hostMeetingReminderTGBIKE(mailUser, booking[i]));
          } else {
            await sendEmail(booking[i].traveller.email,
              'Reminder - your tour is coming up soon',
              temp.travellerMeetingReminderTG(mailUser, booking[i]));
            await sendEmail(booking[i].user.email,
              'Reminder - you have a scheduled tour coming up soon',
              temp.hostMeetingReminderTG(mailUser, booking[i]));
          }
          let travelerName = booking[i].traveller.firstName + booking[i].traveller.lastName;
          let hostName = booking[i].user.firstName + booking[i].user.lastName;
          if (booking[i].traveller.roleCode === ROLE_CODE.BUSINESS) {
            travelerName = booking[i].traveller.businessName;
          }
          if (booking[i].user.roleCode === ROLE_CODE.BUSINESS) {
            hostName = booking[i].user.businessName;
          }
          const option2 = {
            headers: {
              Authorization: `Basic ${process.env.AUTH_KEY}`,
              'Content-Type': 'application/json',
              Host: 'onesignal.com',
            },
          };
          const url = 'https://onesignal.com/api/v1/notifications';
          const data = {
            app_id: process.env.APP_ID,
            include_player_ids: [
              booking[i].traveller.currentLoggedInDeviceId,
            ],
            data: {
              type: 'acceptBooking',
            },
            headings: { en: 'Reminder - upcoming booking' },
            contents: {
              en: 'Just a reminder that you have a scheduled booking coming up in 4 days. Tap here to view more details',
            },
          };
          await axios.post(url, JSON.stringify(data), option2);
          const data2 = {
            app_id: process.env.APP_ID,
            include_player_ids: [
              booking[i].user.currentLoggedInDeviceId,
            ],
            data: {
              type: 'acceptBooking',
            },
            headings: { en: 'Reminder - you have an upcoming booking' },
            contents: {
              en: 'Just a reminder that you have a scheduled booking coming up in 4 days. Tap here to view more details',
            },
          };
          await axios.post(url, JSON.stringify(data2), option2);
        } else {
          await sendEmail(booking[i].traveller.email, 'Reminder - your booking is coming up soon', temp.travellerMeetingReminderIn(mailUser, booking[i]));
          await sendEmail(booking[i].user.email, 'Reminder - you have a scheduled booking coming up soon', temp.hostMeetingReminderIn(mailUser, booking[i]));
          let travelerName = booking[i].traveller.firstName + booking[i].traveller.lastName;
          let hostName = booking[i].user.firstName + booking[i].user.lastName;
          if (booking[i].traveller.roleCode === ROLE_CODE.BUSINESS) {
            travelerName = booking[i].traveller.businessName;
          }
          if (booking[i].user.roleCode === ROLE_CODE.BUSINESS) {
            hostName = booking[i].user.businessName;
          }
          const option2 = {
            headers: {
              Authorization: `Basic ${process.env.AUTH_KEY}`,
              'Content-Type': 'application/json',
              Host: 'onesignal.com',
            },
          };
          const url = 'https://onesignal.com/api/v1/notifications';
          const data = {
            app_id: process.env.APP_ID,
            include_player_ids: [
              booking[i].traveller.currentLoggedInDeviceId,
            ],
            data: {
              type: 'acceptBooking',
            },
            headings: { en: 'Reminder - upcoming booking' },
            contents: {
              en: 'Just a reminder that you have a scheduled booking coming up in 4 days. Tap here to view more details',
            },
          };
          await axios.post(url, JSON.stringify(data), option2);
          const data2 = {
            app_id: process.env.APP_ID,
            include_player_ids: [
              booking[i].user.currentLoggedInDeviceId,
            ],
            data: {
              type: 'acceptBooking',
            },
            headings: { en: 'Reminder - you have an upcoming booking' },
            contents: {
              en: 'Just a reminder that you have a scheduled booking coming up in 4 days. Tap here to view more details',
            },
          };
          await axios.post(url, JSON.stringify(data2), option2);
        }
        await UserActivities.create({ user: booking[i].traveller.id, activity: 'Reminder Email Sent' });
      }
    }
    return 1;
  } catch (error) {
    console.log(error, 'error');
    return null;
  }
};

export const chatSummaryReminder = async () => {
  try {
    const channel = await Chats.find()
      .populate({
        path: 'senderId',
        select: {
          id: 1,
          firstName: 1,
          lastName: 1,
          profilePic: 1,
          email: 1,
        },
      }).populate({
        path: 'receiverId',
        select: {
          id: 1,
          firstName: 1,
          lastName: 1,
          profilePic: 1,
          email: 1,
        },
      });
    if (channel) {
      channel.forEach(async (ele) => {
        const user1 = `${CHAT_BASE_URL}${CHANNEL_TYPE}/${ele.channelUrl}/messages/unread_count?user_ids=${ele.senderId.id}`;
        const user2 = `${CHAT_BASE_URL}${CHANNEL_TYPE}/${ele.channelUrl}/messages/unread_count?user_ids=${ele.receiverId.id}`;
        const options = {
          headers: {
            'Api-Token': '373e628b74e1c9658c855bce6c9ef3804175a2e7',
          },
        };
        const data1 = await axios.get(user1, options);
        const data2 = await axios.get(user2, options);
        const apiUrl = `${CHAT_BASE_URL}${CHANNEL_TYPE}/${ele.channelUrl}`;
        const msgData = await axios.get(apiUrl, options);
        if (msgData) {
          const msgId = msgData.data.last_message.message_id;
          if (data1.data.unread[ele.senderId.id]) {
            const url = `${CHAT_BASE_URL}${CHANNEL_TYPE}/${ele.channelUrl}/messages?message_id=${msgId}&prev_limit=10&next_limit=10`;
            const dataChat1 = await axios.get(url, options);
            const message = [];
            dataChat1.data.messages.forEach((msg) => {
              if (msg.user.user_id === ele.senderId.id) {
                message.push({
                  id: ele.senderId.id,
                  name: `${ele.senderId.firstName} ${ele.senderId.lastName}`,
                  profile: msg.user.profile_url,
                  message: msg.message,
                });
              } else if (msg.user.user_id === ele.receiverId.id) {
                message.push({
                  id: ele.receiverId.id,
                  name: `${ele.receiverId.firstName} ${ele.receiverId.lastName}`,
                  profile: msg.user.profile_url,
                  message: msg.message,
                });
              }
            });
            await sendEmail(ele.senderId.email, 'Chat Summary', temp.chatSummary(ele.senderId, message));
          }
          if (data2.data.unread[ele.receiverId.id]) {
            const url = `${CHAT_BASE_URL}${CHANNEL_TYPE}/${ele.channelUrl}/messages?message_id=${msgId}&prev_limit=10&next_limit=10`;
            const dataChat2 = await axios.get(url, options);
            const message = [];
            dataChat2.data.messages.forEach((msg) => {
              if (msg.user.user_id === ele.senderId.id) {
                message.push({
                  id: ele.senderId.id,
                  name: `${ele.senderId.firstName} ${ele.senderId.lastName}`,
                  profile: msg.user.profile_url,
                  message: msg.message,
                });
              } else if (msg.user.user_id === ele.receiverId.id) {
                message.push({
                  id: ele.receiverId.id,
                  name: `${ele.receiverId.firstName} ${ele.receiverId.lastName}`,
                  profile: msg.user.profile_url,
                  message: msg.message,
                });
              }
            });
            await sendEmail(ele.receiverId.email, 'Chat Summary', temp.chatSummary(ele.receiverId, message));
          }
        }
      });
    }
    return 1;
  } catch (error) {
    console.log('Error:=====', error);
    return null;
  }
};
