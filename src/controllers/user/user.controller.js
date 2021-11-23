/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import path from 'path';
import moment from 'moment';
import { successResponse, errorResponse, uniqueId } from '../../helpers';
import S3Store from '../../helpers/fileUpload';
import sendEmail from '../../helpers/sendEmail';
import Users from '../../models/Users';
import Lodges from '../../models/Lodges';
import UserActivities from '../../models/UserActivities';
import Countries from '../../models/Countries';
import States from '../../models/States';
import Cities from '../../models/Cities';
import Bookings from '../../models/Bookings';
import Braintree from '../../helpers/braintree';
import YoutubeVideos from '../../models/YoutubeVideos';
import temp from '../../helpers/newTemplate';

import { addContact } from '../../helpers/sendEmail';
import {
  TOURGUIDE_SERVICE_FREE_AMOUNT, SERVICE_FREE_AMOUNT, PREFERENCES, ACCOUNT_TYPE, ERROR_MESSAGE,
  INCREMENT, BOOKING_STATUS, AVAILABILITYTYPE, BIKE_SIZE, SIGNUP_POINTS, FIRST_BOOKING_POINTS,
  AVAILABLE_FOR_DEFAULT, INTERESTEDIN_DEFAULT, RADIUS_OF_EARTH, POLICY_LINKS, ROLE_CODE,
} from '../../helpers/constants';
import Availabilities from '../../models/Availabilities';
import AdvertisImages from '../../models/AdvertisImages';
import DestinationTourImages from '../../models/DestinationTourImages';
import Notifications from '../../models/Notifications';
import Transactions from '../../models/Transactions';
import Chats from '../../models/Chats';
import LodgeImages from '../../models/LodgeImages';
import Locations from '../../models/Locations';

const fs = require('fs');

export const CHANNEL_TYPE = 'group_channels';
export const CHAT_BASE_URL = `https://api-${process.env.CHAT_APPLICATION_ID}.sendbird.com/v3/`;
const braintree = new Braintree({
  environment: process.env.ENVIRONMENT,
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY,
  masterMerchantAccountId: process.env.MASTERMERCHANTACCOUNTID,
});

function sortUser(key, order = 'asc') {
  return function innerSort(e1, e2) {
    if (!e1.hasOwnProperty(key) || !e2.hasOwnProperty(key)) {
      return 0;
    }
    const ele1 = (typeof e1[key] === 'string')
      ? e1[key].toUpperCase() : e1[key];
    const ele2 = (typeof e2[key] === 'string')
      ? e2[key].toUpperCase() : e2[key];
    let compare = 0;
    if (ele1 > ele2) {
      compare = 1;
    } else if (ele1 < ele2) {
      compare = -1;
    }
    return (
      (order === 'desc') ? (compare * -1) : compare
    );
  };
}

function isThisWeek(date) {
  const thisWeek = [moment().utc().startOf('week'), moment().utc().endOf('week')];
  return moment(date).isBetween(thisWeek[0], thisWeek[1])
    || moment(date).isSame(thisWeek[0])
    || moment(date).isSame(thisWeek[1]);
}

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({ isAvailabilitySet: true, deleted: false })
      .select({
        userName: 1,
        profilePic: 1,
        accountType: 1,
        roleCode: 1,
        email: 1,
        isAvailabilitySet: 1,
        currentLoggedInDeviceId: 1,
      });
    return successResponse(req, res, users);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getCountries = async (req, res) => {
  try {
    const data = await Countries.find().sort({ id: 1 }).select({ _id: 0 });
    const countriesData = [];
    for (let i = data.length - 1; i > 0; i--) {
      if (data[i].name === 'United States') {
        countriesData.push(data[i]);
        break;
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].name !== 'United States') {
        countriesData.push(data[i]);
      }
    }
    return successResponse(req, res, countriesData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getStates = async (req, res) => {
  try {
    const statesData = await States.find({
      country_id: req.params.id,
    }).sort({ id: 1 }).select({ _id: 0 });
    return successResponse(req, res, statesData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getCities = async (req, res) => {
  try {
    const citiesData = await Cities.find({
      state_id: req.params.id,
    }).sort({ id: 1 }).select({ _id: 0 });
    return successResponse(req, res, citiesData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getRidePreferences = async (req, res) => {
  try {
    const result = PREFERENCES;
    return successResponse(req, res, result);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const checkUser = async (req, res) => {
  try {
    let { email } = req.params;
    email = email.toLowerCase();
    const user = await Users.findOne({ email, deleted: false });
    if (user) {
      return successResponse(req, res, { userExists: true, platform: user.accountType });
    }
    return successResponse(req, res, { userExists: false });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const sendOtp = async (req, res) => {
  try {
    if (req.body.type === 'FORGOT') {
      const user = await Users.findOne({ email: req.body.email, deleted: false })
        .select({
          _id: 1, email: 1, firstName: 1, lastName: 1,
        });
      const mailUser = {
        code: req.body.otp,
        greetingName: req.body.firstName,
        name: `${user.firstName} ${user.lastName}`,
      };
      await sendEmail(req.body.email, 'Reset Password Code', temp.ForgetPassword(mailUser));
    } else {
      const mailUser = {
        code: req.body.otp,
        greetingName: req.body.firstName,
        name: `${req.body.firstName} ${req.body.lastName}`,
      };
      await sendEmail(req.body.email, 'Signup: E-mail Verification', temp.verifyCode(mailUser));
    }
    return successResponse(req, res, 'Email with otp send succesfully');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const register = async (req, res) => {
  try {
    const {
      firstName, lastName, userName, email, password, dateOfBirth, isLiveLocation,
      verifyToken, profilePic, contactNumber, roleCode, businessGoogleData,
      accountType, address, bio, country, version, homeTown, businessDiscount,
      businessType, businessName, businessEmail, pushNotification, businessCoverPhoto,
      webURL, businessContact, aboutBusiness, businessLocations, businessPhotos,
      businessAddress, height, isMultiLocation, isSubUser, businessWorkingHours,
      state, city, zipCode, gender, businessDocument, languages, businessServices,
      purpose, availableGuru, organizationName, organizationEmail, organizationType,
      organizationAddress, availableFor, tourExperience, tourSkills, tourDocument,
      tourTripLocation, interestedIn, fromCoupon, appleUserId, serviceOffered, discount,
    } = req.body;
    const user = await Users.findOne({ email });
    if (user && !user.deleted) {
      throw new Error('User already exists with same email');
    }
    let reqPass;
    if (password) {
      reqPass = crypto
        .createHash('md5')
        .update(password)
        .digest('hex');
    }
    let latitude = 0;
    let longitude = 0;
    let payload = {
      email,
      firstName: firstName || '',
      lastName: lastName || '',
      userName: userName || '',
      dateOfBirth: dateOfBirth || '',
      contactNumber: contactNumber || '',
      accountType: accountType || '',
      roleCode: roleCode || '',
      languages: languages || [],
      purpose: purpose || [],
      availableGuru: availableGuru || false,
      profilePic: profilePic || '',
      address: address || '',
      bio: bio || '',
      businessDocument: businessDocument || '',
      country: country || '',
      businessType: businessType || '',
      businessName: businessName || '',
      businessEmail: businessEmail || '',
      webURL: webURL || '',
      aboutBusiness: aboutBusiness || '',
      businessAddress: businessAddress || '',
      height: height || '',
      state: state || '',
      city: city || '',
      zipCode: zipCode || '',
      gender: gender || '',
      organizationName: organizationName || '',
      organizationEmail: organizationEmail || '',
      organizationType: organizationType || '',
      organizationAddress: organizationAddress || '',
      availableFor: availableFor || AVAILABLE_FOR_DEFAULT,
      tourExperience: tourExperience || '',
      tourSkills: tourSkills || '',
      tourDocument: tourDocument || '',
      tourTripLocation: tourTripLocation || '',
      interestedIn: interestedIn || INTERESTEDIN_DEFAULT,
      fromCoupon: fromCoupon || '',
      appleUserId: appleUserId || '',
      verifyToken: verifyToken || '',
      password: reqPass || '',
      isAvailabilitySet: false,
      isVerified: true,
      serviceOffered,
      discount,
      version,
      homeTown,
      pushNotification,
      businessContact,
      isMultiLocation,
      isSubUser,
      businessWorkingHours,
      businessGoogleData,
      businessPhotos,
      businessDiscount,
      businessServices,
      businessCoverPhoto,
      isLiveLocation,
      couponCode: uniqueId(7),
      dateCreate: new Date(),
    };
    let newUser;
    const newLocations = [];
    if (user) {
      payload = {
        ...payload,
        deleted: false,
      };
      newUser = await Users.findByIdAndUpdate(user.id, payload);
    } else {
      newUser = await Users.create(payload);
    }
    let referredUser = {};
    if (fromCoupon !== undefined) {
      referredUser = await Users.findOne({ couponCode: newUser.fromCoupon });
      if (!referredUser) {
        throw ERROR_MESSAGE.USER_NOT_FOUND;
      }
      const signUpFriends = referredUser.signUpFriends + Number(INCREMENT);
      const specialCredit = referredUser.specialCredit + Number(SIGNUP_POINTS);
      await Users.findByIdAndUpdate(referredUser.id, { signUpFriends, specialCredit });
    }
    let userData = await Users.findByIdAndUpdate(newUser.id, { lastLogin: new Date() });
    userData = await Users.findById(userData.id);
    if (roleCode === ROLE_CODE.BUSINESS) {
      for (let i = 0; i < businessLocations.length; i++) {
        if (businessLocations[i].placeId !== '') {
          const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${businessLocations[i].placeId}&key=${process.env.GOOGLE_API_KEY}`;
          // eslint-disable-next-line no-await-in-loop
          const locationData = await axios.get(url);
          latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
          longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
        }
        let primeLocation = false;
        if (i === 0) {
          primeLocation = true;
        }
        const loc = {
          streetAddress: businessLocations[i].streetAddress,
          city: businessLocations[i].city,
          state: businessLocations[i].state,
          country: businessLocations[i].country,
          zipCode: businessLocations[i].zipCode,
          placeId: businessLocations[i].placeId,
          addressPlaceId: businessLocations[i].addressPlaceId,
          latitude,
          longitude,
          isPrimeLocation: primeLocation,
          user: userData.id,
        };
        // eslint-disable-next-line no-await-in-loop
        const businessLoc = await Locations.create(loc);
        newLocations.push(businessLoc);
      }
    }
    const token = jwt.sign(
      {
        user: {
          userId: userData.id,
          email: userData.email,
          createdAt: userData.lastLogin,
        },
      },
      process.env.SECRET,
    );
    delete userData.password;
    const mailUser = {
      email: userData.email,
      name: userData.firstName,
    };
    const userDetail = { ...userData.toObject() };
    userDetail.businessLocations = newLocations;
    await sendEmail(email, 'Welcome to JAGZ - The Biking App', temp.Welcome(mailUser.name));
    return successResponse(req, res, { token, userDetail });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const updateProfile = async (req, res) => {
  try {
    let user = await Users.findById(req.user.userId);
    if (!user) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const {
      firstName, lastName, userName, dateOfBirth, homeTown, businessContact,
      verifyToken, contactNumber, languages, purpose, availableGuru, businessGoogleData,
      address, gender, bio, files, roleCode, version, businessDiscount, createLocations,
      businessType, businessName, businessEmail, businessLocations, isSubUser,
      webURL, numberOfEMP, taxNumber, aboutBusiness, pushNotification, businessCoverPhoto,
      businessAddress, startDay, endDay, startTime, endTime, height, businessServices,
      country, state, city, zipCode, businessDocument, highLights, isMultiLocation,
      roadRidePreference, cyclingDistance, cyclingSpeed, businessPhotos, businessWorkingHours,
      organizationName, organizationEmail, organizationType, organizationAddress, isLiveLocation,
      availableFor, tourExperience, tourSkills, tourDocument, tourTripLocation, deleteLocation,
      mtbRidePreference, mtbSpeed, interestedIn, rideCategory, currentLoggedInDeviceId,
      deviceInfo, paypalEmail, defaultPayout, discount, serviceOffered, isVerified, isFirst,
    } = req.body;
    let latitude;
    let longitude;
    let busHours;
    let busService;
    let busPhoto;
    let busCreateLocations;
    let busGoogleData;
    if (businessWorkingHours) {
      busHours = JSON.parse(businessWorkingHours);
    }
    if (businessServices) {
      busService = JSON.parse(businessServices);
    }
    if (businessPhotos) {
      busPhoto = JSON.parse(businessPhotos);
    }
    if (createLocations) {
      busCreateLocations = JSON.parse(createLocations);
    }
    if (businessGoogleData) {
      busGoogleData = JSON.parse(businessGoogleData);
    }
    const userData = user.toObject();
    let payload = {
      firstName: firstName || userData.firstName,
      lastName: lastName || userData.lastName,
      userName: userName || userData.userName,
      dateOfBirth: dateOfBirth || userData.dateOfBirth,
      contactNumber: contactNumber || userData.contactNumber,
      languages: languages || userData.languages,
      address: address || userData.address,
      bio: bio || userData.bio,
      businessDocument: businessDocument || userData.businessDocument,
      country: country || userData.country,
      businessType: businessType || userData.businessType,
      businessName: businessName || userData.businessName,
      businessEmail: businessEmail || userData.businessEmail,
      webURL: webURL || userData.webURL,
      numberOfEMP: numberOfEMP || userData.numberOfEMP,
      taxNumber: taxNumber || userData.taxNumber,
      aboutBusiness: aboutBusiness || userData.aboutBusiness,
      businessAddress: businessAddress || userData.businessAddress,
      startDay: startDay || userData.startDay,
      endDay: endDay || userData.endDay,
      startTime: startTime || userData.startTime,
      endTime: endTime || userData.endTime,
      height: height || userData.height,
      state: state || userData.state,
      city: city || userData.city,
      highLights: highLights || userData.highLights,
      zipCode: zipCode || userData.zipCode,
      gender: gender || userData.gender,
      availableGuru: availableGuru || userData.availableGuru,
      verifyToken: verifyToken || userData.verifyToken,
      files: files || userData.files,
      roadRidePreference: roadRidePreference || userData.roadRidePreference,
      cyclingDistance: cyclingDistance || userData.cyclingDistance,
      cyclingSpeed: cyclingSpeed || userData.cyclingSpeed,
      organizationName: organizationName || userData.organizationName,
      organizationEmail: organizationEmail || userData.organizationEmail,
      organizationType: organizationType || userData.organizationType,
      organizationAddress: organizationAddress || userData.organizationAddress,
      availableFor: availableFor || userData.availableFor,
      tourExperience: tourExperience || userData.tourExperience,
      tourSkills: tourSkills || userData.tourSkills,
      tourDocument: tourDocument || userData.tourDocument,
      tourTripLocation: tourTripLocation || userData.tourTripLocation,
      mtbRidePreference: mtbRidePreference || userData.mtbRidePreference,
      mtbSpeed: mtbSpeed || userData.mtbSpeed,
      interestedIn: interestedIn || userData.interestedIn,
      rideCategory: rideCategory || userData.rideCategory,
      currentLoggedInDeviceId: currentLoggedInDeviceId || userData.currentLoggedInDeviceId,
      deviceInfo: deviceInfo || userData.deviceInfo,
      paypalEmail: paypalEmail || userData.paypalEmail,
      purpose: purpose || userData.purpose,
      defaultPayout: defaultPayout || userData.defaultPayout,
      serviceOffered: serviceOffered || userData.serviceOffered,
      discount: discount || userData.discount,
      latitude: latitude || userData.latitude,
      longitude: longitude || userData.longitude,
      isVerified: isVerified || userData.isVerified,
      version: version || userData.version,
      homeTown: homeTown || userData.homeTown,
      pushNotification: pushNotification || userData.pushNotification,
      businessDiscount: businessDiscount || userData.businessDiscount,
      businessContact: businessContact || userData.businessContact,
      isMultiLocation: isMultiLocation || userData.isMultiLocation,
      isSubUser: isSubUser || userData.isSubUser,
      businessWorkingHours: busHours || userData.businessWorkingHours,
      businessGoogleData: busGoogleData || userData.businessGoogleData,
      businessPhotos: busPhoto || userData.businessPhotos,
      businessServices: busService || userData.businessServices,
      businessCoverPhoto: businessCoverPhoto || userData.businessCoverPhoto,
      isLiveLocation: isLiveLocation || userData.isLiveLocation,
      dateUpdate: new Date(),
    };
    if (user.roleCode === ROLE_CODE.PEOPLE) {
      payload.purpose = purpose || userData.purpose;
    }
    if (user.accountType === ACCOUNT_TYPE.APPLE) {
      payload.roleCode = roleCode || userData.roleCode;
    }
    const s3Store = new S3Store();
    const profilePic = req.file;
    if (profilePic) {
      profilePic.uniquename = `${uniqueId()}${path.extname(profilePic.originalname)}`;
      const link = await s3Store.multiUpload('gallery', profilePic);
      if (!link) {
        throw new Error('Link not Returned');
      }
      payload = {
        ...payload,
        profilePic: link[0],
      };
    }
    await Users.findByIdAndUpdate(req.user.userId, { $set: payload });
    await UserActivities.create({ user: req.user.userId, activity: 'Updated Profile' });
    user = await Users.findById(req.user.userId);
    let newLocations;
    if (user.roleCode === ROLE_CODE.BUSINESS) {
      if (businessLocations) {
        const bus = JSON.parse(businessLocations);
        for (let i = 0; i < bus.length; i++) {
          if (bus[i].placeId !== '') {
            const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${bus[i].placeId}&key=${process.env.GOOGLE_API_KEY}`;
            // eslint-disable-next-line no-await-in-loop
            const locationData = await axios.get(url);
            latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
            longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
          }
          const loc = {
            streetAddress: bus[i].streetAddress,
            city: bus[i].city,
            state: bus[i].state,
            country: bus[i].country,
            zipCode: bus[i].zipCode,
            placeId: bus[i].placeId,
            addressPlaceId: bus[i].addressPlaceId,
            latitude,
            longitude,
            isPrimeLocation: bus[i].isPrimeLocation,
            user: user.id,
          };
          // eslint-disable-next-line no-await-in-loop
          await Locations.findByIdAndUpdate(bus[i].id, { $set: loc });
          // eslint-disable-next-line no-await-in-loop
        }
      }
      if (createLocations) {
        for (let i = 0; i < busCreateLocations.length; i++) {
          if (busCreateLocations[i].placeId !== '') {
            const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${busCreateLocations[i].placeId}&key=${process.env.GOOGLE_API_KEY}`;
            // eslint-disable-next-line no-await-in-loop
            const locationData = await axios.get(url);
            latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
            longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
          }
          const loc = {
            streetAddress: busCreateLocations[i].streetAddress,
            city: busCreateLocations[i].city,
            state: busCreateLocations[i].state,
            country: busCreateLocations[i].country,
            zipCode: busCreateLocations[i].zipCode,
            placeId: busCreateLocations[i].placeId,
            addressPlaceId: busCreateLocations[i].addressPlaceId,
            latitude,
            longitude,
            isPrimeLocation: busCreateLocations[i].isPrimeLocation,
            user: user.id,
          };
          // eslint-disable-next-line no-await-in-loop
          await Locations.create(loc);
          // eslint-disable-next-line no-await-in-loop
        }
      }
      if (deleteLocation) {
        await Locations.findOneAndDelete({
          user: req.user.userId,
          isPrimeLocation: false,
        });
      }
      newLocations = await Locations.find({ user: req.user.userId });
    }
    const userDetail = await Users.findById(req.user.userId);
    if (userDetail.roleCode === ROLE_CODE.PEOPLE) {
      if (!userDetail.availableGuru) {
        await Availabilities.updateMany(
          { user: userDetail.id },
          { isActive: false },
        );
      } else {
        await Availabilities.updateMany(
          { user: userDetail.id },
          { isActive: true },
        );
      }
    }
    if (isFirst) {
      if (userDetail.accountType === ACCOUNT_TYPE.APPLE) {
        const mailUser = {
          email: userDetail.email,
          name: userDetail.firstName,
        };
        await sendEmail(mailUser.email, 'Welcome to JAGZ - The Biking App', temp.Welcome(mailUser.name));
      }
    }
    const data = user.toObject();
    data.businessLocations = newLocations;
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const login = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email, deleted: false })
      .select({
        _id: 1, email: 1, accountType: 1, password: 1,
      });
    if (!user) {
      throw new Error('Incorrect Email Id/Password');
    }
    if (req.body.password) {
      const reqPass = crypto
        .createHash('md5')
        .update(req.body.password || '')
        .digest('hex');
      if (reqPass !== user.password) {
        if (user.accountType === ACCOUNT_TYPE.EMAIL) {
          throw new Error('Incorrect Email Id/Password');
        } else {
          throw new Error(`Previosly you have logged-in with ${user.accountType}`);
        }
      }
    }
    let count = 0;
    if (user.appOpenCount) {
      count = user.appOpenCount + 1;
    } else {
      count += 1;
    }
    await UserActivities.create({ user: user.id, activity: 'User Logged In' });
    await Users.findByIdAndUpdate(user.id, { lastLogin: new Date(), appOpenCount: count, version: req.body.version });
    user = await Users.findById(user.id);
    const token = jwt.sign(
      {
        user: {
          userId: user.id,
          email: user.email,
          createdAt: user.lastLogin,
        },
      },
      process.env.SECRET,
    );
    delete user.password;
    return successResponse(req, res, { token });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const uploadFiles = async (req, res) => {
  try {
    const { file } = req.files;
    if (!file) {
      throw new Error('file not provided');
    }
    const s3Store = new S3Store();
    file.map((x) => {
      x.uniquename = `${uniqueId()}${path.extname(x.originalname)}`;
      return x;
    });
    const link = await s3Store.multiUpload('gallery', file);
    if (!link) {
      throw new Error('Link not Returned');
    }
    return successResponse(req, res, link);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const deleteFiles = async (req, res) => {
  try {
    // const { fileLink } = req.body.fileLink;
    const s3Store = new S3Store();
    const response = await s3Store.removeFiles('gallery', req.body.fileLink);
    await UserActivities.create({ user: req.user.userId, activity: 'Deleted File' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const profile = async (req, res) => {
  try {
    const { userId } = req.user;
    const userData = await Users.findById(userId);
    let locations;
    const user = { ...userData.toObject() };
    if (userData.roleCode === ROLE_CODE.BUSINESS) {
      locations = await Locations.find({ user: userData.id });
      user.businessLocations = locations;
    }
    return successResponse(req, res, { user });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await Users.findById(userId);
    // const user = await Users.findOne({ email });

    const reqPass = crypto
      .createHash('md5')
      .update(req.body.oldPassword)
      .digest('hex');
    if (reqPass !== user.password) {
      throw new Error('Old password is incorrect');
    }

    const newPass = crypto
      .createHash('md5')
      .update(req.body.newPassword)
      .digest('hex');

    await Users.findByIdAndUpdate(user.id, { password: newPass });
    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ email, deleted: false });

    const newPass = crypto
      .createHash('md5')
      .update(req.body.newPassword)
      .digest('hex');

    await Users.findByIdAndUpdate(user.id, { password: newPass });
    return successResponse(req, res, 'password updated sucessfully');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const referralCode = async (req, res) => {
  try {
    let user = {};
    const {
      bookingId, couponCode,
    } = req.body;
    if (req.user.fromCoupon) {
      const bookingDetails = await Bookings.findById(bookingId);
      if (!bookingDetails) {
        throw new Error(ERROR_MESSAGE.BOOKING_NOT_FOUND);
      }
      const destinationUser = await Users.findOne({ couponCode });
      if (!destinationUser) {
        throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
      }
      const friendBookCredit = destinationUser.friendBookCredit + Number(INCREMENT);
      const specialCredit = destinationUser.specialCredit + Number(FIRST_BOOKING_POINTS);
      await Users.findByIdAndUpdate(destinationUser.id, { specialCredit, friendBookCredit });
      user = await Users.findById(destinationUser.id);
    }
    return successResponse(req, res, user);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getTours = async (req, res) => {
  try {
    const dist = 50;
    let maxLat;
    let minLat;
    let maxLng;
    let minLng;
    let tourGuide = [];
    let business = [];
    let popularRiders = [];
    let tours = [];
    const exploreNearBy = [];
    const { latitude, longitude } = req.body;
    if (latitude && longitude) {
      maxLat = latitude + ((dist / RADIUS_OF_EARTH) * (180 / Math.PI));
      minLat = latitude - ((dist / RADIUS_OF_EARTH) * (180 / Math.PI));
      maxLng = longitude + ((Math.asin(dist / RADIUS_OF_EARTH)
        / Math.cos(latitude * (Math.PI / 180))) * (180 / Math.PI));
      minLng = longitude - ((Math.asin(dist / RADIUS_OF_EARTH)
        / Math.cos(latitude
          * (Math.PI / 180))) * (180 / Math.PI));
      tours = await Availabilities.find({
        isActive: true,
        latitude: { $gte: minLat, $lte: maxLat },
        longitude: { $gte: minLng, $lte: maxLng },
      }).populate({
        path: 'user',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          profilePic: 1,
          roleCode: 1,
          currentLoggedInDeviceId: 1,
        },
      });
      if (tours.length > 0) {
        const users = [];
        tours.forEach(async (ele) => {
          if (ele.user.roleCode === ROLE_CODE.TOURGUIDE) {
            tourGuide.push({
              _id: ele._id,
              tourName: ele.tourName,
              locationName: ele.locationName,
              highLights: ele.highLights,
              user: {
                _id: ele.user._id,
                firstName: ele.user.firstName,
                lastName: ele.user.lastName,
                email: ele.user.email,
                profilePic: ele.user.profilePic,
                roleCode: ele.user.roleCode,
                currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
              },
            });
            exploreNearBy.push({
              _id: ele._id,
              tourName: ele.tourName,
              locationName: ele.locationName,
              highLights: ele.highLights,
              user: {
                _id: ele.user._id,
                firstName: ele.user.firstName,
                lastName: ele.user.lastName,
                email: ele.user.email,
                profilePic: ele.user.profilePic,
                roleCode: ele.user.roleCode,
                currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
              },
            });
          }
          if (ele.user.roleCode === ROLE_CODE.BUSINESS) {
            business.push({
              _id: ele._id,
              tourName: ele.tourName,
              locationName: ele.locationName,
              highLights: ele.highLights,
              user: {
                _id: ele.user._id,
                firstName: ele.user.firstName,
                lastName: ele.user.lastName,
                email: ele.user.email,
                profilePic: ele.user.profilePic,
                roleCode: ele.user.roleCode,
                currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
              },
            });
            exploreNearBy.push({
              _id: ele._id,
              tourName: ele.tourName,
              locationName: ele.locationName,
              highLights: ele.highLights,
              user: {
                _id: ele.user._id,
                firstName: ele.user.firstName,
                lastName: ele.user.lastName,
                email: ele.user.email,
                profilePic: ele.user.profilePic,
                roleCode: ele.user.roleCode,
                currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
              },
            });
          }
          users.push({
            _id: ele.user._id,
            firstName: ele.user.firstName,
            lastName: ele.user.lastName,
            email: ele.user.email,
            profilePic: ele.user.profilePic,
            roleCode: ele.user.roleCode,
            currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
          });
        });
        const groupBy = (array, key) => array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
          return result;
        }, {});
        const groupUser = groupBy(users, '_id');
        const booking = await Bookings.find().select({ _id: 1, user: 1 });
        const finalUser = [];
        Object.keys(groupUser).forEach((ele) => {
          groupUser[ele][0] = {
            ...groupUser[ele][0],
            count: groupUser[ele].length,
          };
          finalUser.push(groupUser[ele][0]);
        });
        const result = [];
        const result2 = [];
        const finalBooking = [];
        let groupBooking;
        if (booking.length !== 0) {
          groupBooking = groupBy(booking, 'user');
          Object.keys(groupBooking).forEach((ele) => {
            finalBooking.push({
              id: groupBooking[ele][0].user,
              bookingCount: groupBooking[ele].length,
            });
          });
          finalUser.forEach((ele) => {
            finalBooking.forEach((element) => {
              if (ele.roleCode === ROLE_CODE.PEOPLE) {
                if (String(ele._id) === String(element.id)) {
                  ele = {
                    ...ele,
                    bookingCount: element.bookingCount,
                  };
                  result.push(ele);
                } else {
                  result2.push(ele);
                }
              }
            });
          });
        } else { result.push(...finalUser); }
        result.push(...result2);
        const response = [];
        const uniqueIds = [];
        result.forEach((data) => {
          if (!uniqueIds.includes(String(data._id))) {
            response.push(data);
            uniqueIds.push(String(data._id));
          }
        });
        popularRiders = response.sort(sortUser('bookingCount', 'desc'));
      } else {
        tourGuide = await Availabilities.aggregate([
          {
            $lookup: {
              from: 'Users',
              localField: 'user',
              foreignField: '_id',
              as: 'user',
            },
          },
          { $unwind: { path: '$user' } },
          { $match: { 'user.roleCode': ROLE_CODE.TOURGUIDE, isActive: true } },
          {
            $project: {
              _id: 1,
              tourName: 1,
              locationName: 1,
              highLights: 1,
              user: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                profilePic: 1,
                roleCode: 1,
                currentLoggedInDeviceId: 1,
              },
            },
          },
        ]);
        business = await Availabilities.aggregate([
          {
            $lookup: {
              from: 'Users',
              localField: 'user',
              foreignField: '_id',
              as: 'user',
            },
          },
          { $unwind: { path: '$user' } },
          { $match: { 'user.roleCode': ROLE_CODE.BUSINESS, isActive: true } },
          {
            $project: {
              _id: 1,
              tourName: 1,
              locationName: 1,
              highLights: 1,
              user: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                profilePic: 1,
                roleCode: 1,
                currentLoggedInDeviceId: 1,
              },
            },
          },
        ]);
        popularRiders = await Bookings.aggregate([{
          $lookup: {
            from: 'Users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        { $unwind: { path: '$user' } },
        { $match: { 'user.deleted': false } },
        {
          $group: {
            _id: '$user',
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        {
          $project: {
            _id: '$_id._id',
            firstName: '$_id.firstName',
            lastName: '$_id.lastName',
            email: '$_id.email',
            profilePic: '$_id.profilePic',
            roleCode: '$_id.roleCode',
            currentLoggedInDeviceId: '$_id.currentLoggedInDeviceId',
          },
        },
        ]);
      }
    } else {
      tourGuide = await Availabilities.aggregate([
        {
          $lookup: {
            from: 'Users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        { $unwind: { path: '$user' } },
        { $match: { 'user.roleCode': ROLE_CODE.TOURGUIDE, isActive: true } },
        {
          $project: {
            _id: 1,
            tourName: 1,
            locationName: 1,
            highLights: 1,
            user: {
              _id: 1,
              firstName: 1,
              lastName: 1,
              email: 1,
              profilePic: 1,
              roleCode: 1,
              currentLoggedInDeviceId: 1,
            },
          },
        },
      ]);
      business = await Availabilities.aggregate([
        {
          $lookup: {
            from: 'Users',
            localField: 'user',
            foreignField: '_id',
            as: 'user',
          },
        },
        { $unwind: { path: '$user' } },
        { $match: { 'user.roleCode': ROLE_CODE.BUSINESS, isActive: true } },
        {
          $project: {
            _id: 1,
            tourName: 1,
            locationName: 1,
            highLights: 1,
            user: {
              _id: 1,
              firstName: 1,
              lastName: 1,
              email: 1,
              profilePic: 1,
              roleCode: 1,
              currentLoggedInDeviceId: 1,
            },
          },
        },
      ]);
      popularRiders = await Bookings.aggregate([{
        $lookup: {
          from: 'Users',
          localField: 'user',
          foreignField: '_id',
          as: 'user',
        },
      },
      { $unwind: { path: '$user' } },
      { $match: { 'user.deleted': false } },
      {
        $group: {
          _id: '$user',
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      {
        $project: {
          _id: '$_id._id',
          firstName: '$_id.firstName',
          lastName: '$_id.lastName',
          email: '$_id.email',
          profilePic: '$_id.profilePic',
          roleCode: '$_id.roleCode',
          currentLoggedInDeviceId: '$_id.currentLoggedInDeviceId',
        },
      },
      ]);
    }
    const destinationTour = await DestinationTourImages.find();
    const advertiseData = await AdvertisImages.find();
    const youTubeVideoData = await YoutubeVideos.find();
    const topImages = await LodgeImages.find();
    /* const groupBy = (array, key) => array.reduce((result, currentValue) => {
      let cnt = 0;
      (result[currentValue[key]] = result[currentValue[key]] || []).push(cnt += 1);
      return result;
    }, {});
    const groupByDestinationTour = groupBy(destinationTour, 'imgName');
    const groupByAdvertiseData = groupBy(advertiseData, 'imgName'); */
    const tour = {
      tourGuide,
      business,
      topImages,
      destinationTour,
      advertiseData,
      popularLocation: business,
      someToursForYou: business,
      exploreNearBy,
      popularRiders,
      image: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS6F9TPuMibffB6FlWN8sIVvu0joigUxzfhg&usqp=CAU',
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-8/Santa_Monica_Path-1296x728-Header.jpg?w=1155',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtiCUMaK5QN7uLJdG71xqoKkSTR5qzs-OWjg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMXPcqL7ZT6cGggkYiOK-PSHO7T8ish0ZSPg&usqp=CAU',
      ],
      blog: [
        {
          title: 'The Best Mountain Bike Trails In The World',
          type: 'Mountain Bike Trails',
          image: 'https://images.singletracks.com/blog/wp-content/uploads/2016/11/IMG_0364-orig-scaled.jpg',
          link: 'https://www.singletracks.com/the-best-mountain-bike-trails-in-the-world/',
        },
        {
          title: 'Most Popular Mountain Bike Trails in the US and Canada, State-by-State',
          type: 'Mountain Bike Trails',
          image: 'https://images.singletracks.com/blog/wp-content/uploads/2017/05/moto-0.jpg',
          link: 'https://www.singletracks.com/mtb-trails/popular-mountain-bike-trails-us-canada-state-state-2017/',
        },
        {
          title: 'Where to Ride: Exploring Girona, Spain’s great gravel roads, castles & coastline',
          type: 'Mountain Bike Trails',
          image: 'https://s3.amazonaws.com/www.bikerumor.com/wp-content/uploads/2019/08/xpdtn3-girona-gravel-road-bike-riding-marc-gasch-11-1068x712.jpg?ezimgfmt=ng:webp/ngcb18',
          link: 'https://bikerumor.com/2019/08/19/where-to-ride-exploring-girona-spains-great-gravel-roads-castles-coastline-w-xpdtn3/',
        },
        {
          title: 'Where to Ride: Crossing the Arctic Circle on Finland’s endless gravel roads',
          type: 'Mountain Bike Trails',
          image: 'https://s3.amazonaws.com/www.bikerumor.com/wp-content/uploads/2019/09/xpdtn3-finland-gravel-cycling-34-1068x601.jpg?ezimgfmt=ng:webp/ngcb18',
          link: 'https://bikerumor.com/2019/09/15/where-to-ride-crossing-the-arctic-circle-on-finlands-endless-gravel-roads-w-xpdtn3/',
        },
        {
          title: 'Where to Ride: Mountain Biking in Aberdeenshire, Scotland’s wild and rugged enduro destination',
          type: 'Mountain Bike Trails',
          image: 'https://s3.amazonaws.com/www.bikerumor.com/wp-content/uploads/2019/09/Aberdeenshire-MTB-Granite-Trails-Pitfichie-enduro-1068x601.jpg',
          link: 'https://bikerumor.com/2019/09/19/where-to-ride-mountain-biking-in-aberdeenshire-scotlands-lesser-travelled-enduro-destination/',
        },
      ],
      youTubeVideo: [
        {
          id: {
            videoId: youTubeVideoData[0].videoId,
          },
          snippet: youTubeVideoData[0].snippet,
        },
        {
          id: {
            videoId: youTubeVideoData[1].videoId,
          },
          snippet: youTubeVideoData[1].snippet,
        },
      ],
      comingSoonVideo: [
        'https://mtbguru.s3.us-east-2.amazonaws.com/gallery/2L2llz6L01BTz.mp4',
      ],
      BIKE_SIZE,
    };
    return successResponse(req, res, tour);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const search = async (req, res) => {
  try {
    let userData = [];
    const matchedUser = [];
    const { placeId, name, rideCategory } = req.body;
    const dist = 50;
    let maxLat;
    let minLat;
    let maxLng;
    let minLng;
    let locationData;
    if (placeId) {
      locationData = await Availabilities.findOne({ placeId });
      if (!locationData) {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
        locationData = await axios.get(url);
        locationData.latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
        locationData.longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
      }
      console.log(locationData.latitude, locationData.longitude);
      if (locationData) {
        maxLat = locationData.latitude + ((dist / RADIUS_OF_EARTH) * (180 / Math.PI));
        minLat = locationData.latitude - ((dist / RADIUS_OF_EARTH) * (180 / Math.PI));
        maxLng = locationData.longitude + ((Math.asin(dist / RADIUS_OF_EARTH)
          / Math.cos(locationData.latitude * (Math.PI / 180))) * (180 / Math.PI));
        minLng = locationData.longitude - ((Math.asin(dist / RADIUS_OF_EARTH)
          / Math.cos(locationData.latitude
            * (Math.PI / 180))) * (180 / Math.PI));
        userData = await Availabilities.find({
          isActive: true,
          latitude: { $gte: minLat, $lte: maxLat },
          longitude: { $gte: minLng, $lte: maxLng },
        }).populate({
          path: 'user',
        });
      }
    } else {
      userData = await Availabilities.find({ isActive: true })
        .populate({
          path: 'user',
        });
    }
    /* if (!userData.length) {
      throw new Error(ERROR_MESSAGE.AVAILABILITY_NOT_FOUND);
    } */

    let businessUser = [];
    let businessLocation = [];
    if (locationData && name) {
      businessUser = await Users.find({
        roleCode: ROLE_CODE.BUSINESS,
        businessName: { $regex: name, $options: 'i' },
        deleted: false,
      });
      businessLocation = await Locations.find({
        latitude: { $gte: minLat, $lte: maxLat },
        longitude: { $gte: minLng, $lte: maxLng },
      }).populate({
        path: 'user',
      });
    } else if (locationData) {
      businessLocation = await Locations.find({
        latitude: { $gte: minLat, $lte: maxLat },
        longitude: { $gte: minLng, $lte: maxLng },
      }).populate({
        path: 'user',
      });
    } else if (name) {
      businessUser = await Users.find({
        roleCode: ROLE_CODE.BUSINESS,
        businessName: { $regex: name, $options: 'i' },
        deleted: false,
      });
    }
    const userArray = [];
    const rideArray = [];
    const uniqueBusinessUser = [];
    if (userData.length !== 0) {
      userData.forEach((ele) => {
        if ((rideCategory[0].key === 'Mountain Biking' && rideCategory[0].checked !== false)
          || (rideCategory[1].key === 'Road Cycling' && rideCategory[1].checked !== false)) {
          ele.rideCategory.forEach((element) => {
            if (element.key === rideCategory[0].key) {
              if (element.checked === true && rideCategory[0].checked === true) {
                rideArray.push(ele);
              }
            }
            if (element.key === rideCategory[1].key) {
              if (element.checked === true && rideCategory[1].checked === true) {
                rideArray.push(ele);
              }
            }
          });
        } else {
          rideArray.push(ele);
        }
      });
    }
    rideArray.forEach(async (ele) => {
      if (ele.user.roleCode === ROLE_CODE.PEOPLE) {
        if (ele.requiredFieldAvailable === true) {
          userArray.push({
            _id: ele.user._id,
            fullName: `${ele.user.firstName} ${ele.user.lastName}`,
            userName: ele.user.userName,
            email: ele.user.email,
            rideCategory: ele.rideCategory,
            profilePic: ele.user.profilePic,
            accountType: ele.user.accountType,
            roleCode: ele.user.roleCode,
            isAvailabilitySet: ele.user.isAvailabilitySet,
            bio: ele.user.bio,
            locationName: ele.locationName,
            price: ele.price,
            currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
            availabilityId: ele._id,
            highLights: ele.highLights,
            availablilityBio: ele.bio,
            bookingCount: ele.user.bookingCount,
            whatsIncludes: ele.whatsIncludes,
          });
        }
      } else {
        if (!uniqueBusinessUser.includes(String(ele.user._id))) {
          uniqueBusinessUser.push(String(ele.user._id));
        }
        if (ele.user.roleCode === ROLE_CODE.TOURGUIDE) {
          if (ele.user.bio !== '') {
            userArray.push({
              _id: ele.user._id,
              fullName: `${ele.user.firstName} ${ele.user.lastName}`,
              userName: ele.user.userName,
              email: ele.user.email,
              rideCategory: ele.rideCategory,
              profilePic: ele.user.profilePic,
              accountType: ele.user.accountType,
              roleCode: ele.user.roleCode,
              isAvailabilitySet: ele.user.isAvailabilitySet,
              bio: ele.user.bio,
              count: 0,
              businessName: ele.user.businessName || '',
              currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
              availabilityId: ele._id,
              highLights: ele.highLights,
              tourTripLocation: ele.user.tourTripLocation,
              contactNumber: ele.user.contactNumber,
              businessType: ele.user.businessType || '',
              aboutBusiness: ele.user.aboutBusiness || '',
              businessDiscount: ele.user.businessDiscount || '',
              discount: ele.user.discount,
              serviceOffered: ele.user.serviceOffered,
              city: ele.user.city,
            });
          }
        }
        if (ele.user.roleCode === ROLE_CODE.BUSINESS) {
          userArray.push({
            _id: ele.user._id,
            fullName: `${ele.user.firstName} ${ele.user.lastName}`,
            userName: ele.user.userName,
            email: ele.user.email,
            rideCategory: ele.rideCategory,
            profilePic: ele.user.profilePic,
            accountType: ele.user.accountType,
            roleCode: ele.user.roleCode,
            isAvailabilitySet: ele.user.isAvailabilitySet,
            bio: ele.user.bio,
            count: 0,
            currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
            businessName: ele.user.businessName,
            businessContact: ele.user.businessContact,
            businessType: ele.user.businessType,
            aboutBusiness: ele.user.aboutBusiness,
            businessCoverPhoto: ele.user.businessCoverPhoto,
            businessPhotos: ele.user.businessPhotos,
            businessGoogleData: ele.user.businessGoogleData,
            businessDiscount: ele.user.businessDiscount || '',
            businessWorkingHours: ele.user.businessWorkingHours,
          });
        }
      }
    });
    if (businessUser.length !== 0) {
      businessUser.forEach(async (ele) => {
        if (!uniqueBusinessUser.includes(String(ele._id))) {
          userArray.push({
            _id: ele._id,
            fullName: `${ele.firstName} ${ele.lastName}`,
            userName: ele.userName,
            email: ele.email,
            rideCategory: ele.rideCategory,
            profilePic: ele.profilePic,
            accountType: ele.accountType,
            roleCode: ele.roleCode,
            isAvailabilitySet: ele.isAvailabilitySet,
            bio: ele.bio,
            count: 0,
            currentLoggedInDeviceId: ele.currentLoggedInDeviceId,
            businessName: ele.businessName,
            businessContact: ele.businessContact,
            businessType: ele.businessType,
            aboutBusiness: ele.aboutBusiness,
            businessCoverPhoto: ele.businessCoverPhoto,
            businessPhotos: ele.businessPhotos,
            businessGoogleData: ele.businessGoogleData,
            businessDiscount: ele.businessDiscount || '',
            businessWorkingHours: ele.businessWorkingHours,
          });
        }
      });
    }
    if (businessLocation.length !== 0) {
      businessLocation.forEach((ele) => {
        if (!uniqueBusinessUser.includes(String(ele.user._id))) {
          userArray.push({
            _id: ele.user._id,
            fullName: `${ele.user.firstName} ${ele.user.lastName}`,
            userName: ele.user.userName,
            email: ele.user.email,
            rideCategory: ele.user.rideCategory,
            profilePic: ele.user.profilePic,
            accountType: ele.user.accountType,
            roleCode: ele.user.roleCode,
            isAvailabilitySet: ele.user.isAvailabilitySet,
            bio: ele.user.bio,
            count: 0,
            currentLoggedInDeviceId: ele.user.currentLoggedInDeviceId,
            businessName: ele.user.businessName,
            businessContact: ele.user.businessContact,
            businessType: ele.user.businessType,
            aboutBusiness: ele.user.aboutBusiness,
            businessCoverPhoto: ele.user.businessCoverPhoto,
            businessPhotos: ele.user.businessPhotos,
            businessGoogleData: ele.user.businessGoogleData,
            businessDiscount: ele.user.businessDiscount || '',
            businessWorkingHours: ele.user.businessWorkingHours,
            placeId: ele.placeId,
            latitude: ele.latitude,
            longitude: ele.longitude,
            country: ele.country,
            state: ele.state,
            city: ele.city,
            streetAddress: ele.streetAddress,
            zipCode: ele.zipCode,
            isPrimeLocation: ele.isPrimeLocation,
            addressPlaceId: ele.addressPlaceId,
          });
        }
      });
    }
    if (name) {
      userArray.forEach((ele) => {
        if (ele.roleCode === ROLE_CODE.BUSINESS) {
          const bName = ele.businessName.toLowerCase();
          if (bName.match(name.toLowerCase())) {
            matchedUser.push(ele);
          }
        } else {
          const fname = ele.fullName.toLowerCase();
          if (fname.match(name.toLowerCase())) {
            matchedUser.push(ele);
          }
        }
      });
    } else {
      userArray.forEach((ele) => {
        matchedUser.push(ele);
      });
    }
    const groupBy = (array, key) => array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
    const groupUser = groupBy(matchedUser, '_id');
    const booking = await Bookings.find().select({ _id: 1, user: 1 });
    const finalUser = [];
    Object.keys(groupUser).forEach((ele) => {
      if (groupUser[ele][0].roleCode === ROLE_CODE.PEOPLE) {
        finalUser.push(groupUser[ele][0]);
      } else {
        if (groupUser[ele][0].isAvailabilitySet === true) {
          groupUser[ele][0] = {
            ...groupUser[ele][0],
            count: groupUser[ele].length,
          };
        } else {
          groupUser[ele][0] = {
            ...groupUser[ele][0],
            count: 0,
          };
        }
        finalUser.push(groupUser[ele][0]);
      }
    });
    const result = [];
    const result2 = [];
    const finalBooking = [];
    let groupBooking;
    if (booking.length !== 0) {
      groupBooking = groupBy(booking, 'user');
      Object.keys(groupBooking).forEach((ele) => {
        finalBooking.push({
          id: groupBooking[ele][0].user,
          bookingCount: groupBooking[ele].length,
        });
      });
      finalUser.forEach((ele) => {
        finalBooking.forEach((element) => {
          if (String(ele._id) === String(element.id)) {
            ele = {
              ...ele,
              bookingCount: element.bookingCount,
            };
            result.push(ele);
          } else {
            result2.push(ele);
          }
        });
      });
    } else { result.push(...finalUser); }
    result.push(...result2);
    const response = [];
    const uniqueIds = [];
    result.forEach((data) => {
      if (!uniqueIds.includes(String(data._id))) {
        response.push(data);
        uniqueIds.push(String(data._id));
      }
    });
    const users = response.sort(sortUser('bookingCount', 'desc'));
    const tours = [];
    users.forEach((ele) => {
      rideArray.forEach((element) => {
        if ((ele._id === element.user._id) && (ele.roleCode !== ROLE_CODE.PEOPLE)) {
          tours.push({
            _id: element._id,
            tourName: element.tourName,
            locationName: element.locationName,
            highLights: element.highLights,
            rideCategory: element.rideCategory,
            price: element.price,
            itinerary: element.itinerary,
            user: {
              _id: element.user._id,
              firstName: element.user.firstName,
              lastName: element.user.lastName,
              email: element.user.email,
              profilePic: element.user.profilePic,
              roleCode: element.user.roleCode,
              currentLoggedInDeviceId: element.user.currentLoggedInDeviceId,
            },
          });
        }
      });
    });
    const uniqueTourId = [];
    const uniqueTour = [];
    tours.forEach((data) => {
      if (!uniqueTourId.includes(String(data._id))) {
        uniqueTour.push(data);
        uniqueTourId.push(String(data._id));
      }
    });
    const user = [];
    users.forEach(async (ele) => {
      if (ele.roleCode === ROLE_CODE.BUSINESS && !ele.placeId) {
        const loc = await Locations.find({ user: ele._id });
        loc.forEach((element) => {
          user.push({
            _id: ele._id,
            fullName: ele.fullName,
            userName: ele.userName,
            email: ele.email,
            rideCategory: ele.rideCategory,
            profilePic: ele.profilePic,
            accountType: ele.accountType,
            roleCode: ele.roleCode,
            isAvailabilitySet: ele.isAvailabilitySet,
            bio: ele.bio,
            count: 0,
            currentLoggedInDeviceId: ele.currentLoggedInDeviceId,
            businessName: ele.businessName,
            businessContact: ele.businessContact,
            businessType: ele.businessType,
            aboutBusiness: ele.aboutBusiness,
            businessCoverPhoto: ele.businessCoverPhoto,
            businessPhotos: ele.businessPhotos,
            businessGoogleData: ele.businessGoogleData,
            businessDiscount: ele.businessDiscount || '',
            businessWorkingHours: ele.businessWorkingHours,
            placeId: element.placeId,
            latitude: element.latitude,
            longitude: element.longitude,
            country: element.country,
            state: element.state,
            city: element.city,
            streetAddress: element.streetAddress,
            zipCode: element.zipCode,
            isPrimeLocation: element.isPrimeLocation,
            addressPlaceId: element.addressPlaceId,
          });
        });
      } else {
        user.push(ele);
      }
    });
    if (placeId && name) {
      await UserActivities.create({ user: req.user.userId, activity: `Searched for ${locationData.locationName} & ${name}` });
    } else if (placeId) {
      await UserActivities.create({ user: req.user.userId, activity: `Searched for ${locationData.locationName}` });
    } else if (name) {
      await UserActivities.create({ user: req.user.userId, activity: `Searched for ${name}` });
    }
    const userAndTour = {
      user,
      tours: uniqueTour,
    };
    return successResponse(req, res, userAndTour);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getDeviceId = async (req, res) => {
  try {
    const response = await Users.findById(req.body.userId)
      .select({
        currentLoggedInDeviceId: 1,
      });
    if (!response) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const booking = await Bookings.findOne({
      $or: [
        { user: req.body.userId },
        { traveller: req.body.userId },
      ],
    });
    if (booking) {
      const currentDate = new Date();
      if (((booking.selectedDate > currentDate)
        && (booking.bookingStatus === BOOKING_STATUS.ACCEPTED))
        || (booking.bookingStatus === BOOKING_STATUS.REQUESTED)) {
        throw new Error(ERROR_MESSAGE.UNABLE_TO_DELETE_USER);
      }
    }
    const user = await braintree.getPaymentMethodsByCustomerId(req.user.userId);
    for (let i = 0; i < user.length; i += 1) {
      const paymentToken = user[i].token;
      await braintree.deletePaymentMethod(paymentToken);
    }
    await Users.findByIdAndUpdate(req.body.userId,
      { deleted: true, paypalEmail: '', isMerchantAccount: false });
    const response = await Users.findById(req.body.userId);
    if (response.deleted) {
      await Availabilities.updateMany(
        { user: req.body.userId },
        { isActive: false },
      );
      await Bookings.updateMany({ traveller: req.body.userId }, { isTravellerDeleted: true });
      await Bookings.updateMany({ user: req.body.userId }, { isUserDeleted: true });
      await Notifications.updateMany({ userTo: req.body.userId }, { isDeleted: true });
      await Locations.remove({ user: req.body.userId });
      await UserActivities.create({ user: response.id, activity: 'User Deleted' });
    }
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const checkAppleUser = async (req, res) => {
  try {
    const {
      firstName, lastName, userName, email, password, dateOfBirth,
      verifyToken, profilePic, contactNumber, roleCode,
      accountType, address, bio, country, currentLoggedInDeviceId,
      businessType, businessName, businessEmail,
      webURL, numberOfEMP, taxNumber, aboutBusiness,
      businessAddress, startDay, endDay, startTime, endTime, height,
      state, city, zipCode, gender, businessDocument, languages,
      purpose, availableGuru, organizationName, organizationEmail, organizationType,
      organizationAddress, availableFor, tourExperience, tourSkills, tourDocument,
      tourTripLocation, interestedIn, fromCoupon, appleUserId, serviceOffered, discount,
    } = req.body;
    let token;
    let user = await Users.findOne({ appleUserId });
    if (user && !user.deleted) {
      let count = 0;
      if (user.appOpenCount) {
        count = user.appOpenCount + 1;
      } else {
        count += 1;
      }
      if (!user.isVerified) {
        await Users.findByIdAndUpdate(user.id, { lastLogin: new Date(), appOpenCount: count });
        user = await Users.findById(user.id);
        token = jwt.sign(
          {
            user: {
              userId: user.id,
              email: user.email,
              createdAt: user.lastLogin,
            },
          },
          process.env.SECRET,
        );
        await UserActivities.create({ user: user.id, activity: 'User Logged In' });
        return successResponse(req, res, { userExists: false, token, user });
      }
      await Users.findByIdAndUpdate(user.id, { lastLogin: new Date(), appOpenCount: count });
      user = await Users.findById(user.id);
      token = jwt.sign(
        {
          user: {
            userId: user.id,
            email: user.email,
            createdAt: user.lastLogin,
          },
        },
        process.env.SECRET,
      );
      await UserActivities.create({ user: user.id, activity: 'User Logged In' });
      return successResponse(req, res, { userExists: true, token, user });
    }
    let reqPass;
    if (password) {
      reqPass = crypto
        .createHash('md5')
        .update(password)
        .digest('hex');
    }
    let latitude = 0;
    let longitude = 0;
    if (roleCode === ROLE_CODE.BUSINESS) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.GOOGLE_API_KEY}`;
      const locationData = await axios.get(url);
      latitude = JSON.parse(JSON.stringify(locationData.data.results[0].geometry.location.lat));
      longitude = JSON.parse(JSON.stringify(locationData.data.results[0].geometry.location.lng));
    }
    const payload = {
      email,
      firstName: firstName || '',
      lastName: lastName || '',
      userName: userName || '',
      dateOfBirth: dateOfBirth || '',
      contactNumber: contactNumber || '',
      accountType: accountType || '',
      roleCode: roleCode || '',
      languages: languages || [],
      purpose: purpose || [],
      availableGuru: availableGuru || false,
      profilePic: profilePic || '',
      address: address || '',
      bio: bio || '',
      businessDocument: businessDocument || '',
      country: country || '',
      businessType: businessType || '',
      businessName: businessName || '',
      businessEmail: businessEmail || '',
      webURL: webURL || '',
      numberOfEMP: numberOfEMP || '',
      taxNumber: taxNumber || '',
      aboutBusiness: aboutBusiness || '',
      businessAddress: businessAddress || '',
      startDay: startDay || '',
      endDay: endDay || '',
      startTime: startTime || '',
      endTime: endTime || '',
      height: height || '',
      state: state || '',
      city: city || '',
      zipCode: zipCode || '',
      gender: gender || '',
      organizationName: organizationName || '',
      organizationEmail: organizationEmail || '',
      organizationType: organizationType || '',
      organizationAddress: organizationAddress || '',
      availableFor: availableFor || AVAILABLE_FOR_DEFAULT,
      tourExperience: tourExperience || '',
      tourSkills: tourSkills || '',
      tourDocument: tourDocument || '',
      tourTripLocation: tourTripLocation || '',
      interestedIn: interestedIn || INTERESTEDIN_DEFAULT,
      fromCoupon: fromCoupon || '',
      appleUserId: appleUserId || '',
      verifyToken: verifyToken || '',
      password: reqPass || '',
      isAvailabilitySet: false,
      isVerified: false,
      serviceOffered,
      discount,
      latitude,
      longitude,
      currentLoggedInDeviceId,
      couponCode: uniqueId(7),
      dateCreate: new Date(),
    };
    let newUser;
    if (user) {
      newUser = await Users.findByIdAndUpdate(user.id, { deleted: false, isVerified: false });
    } else {
      newUser = await Users.create(payload);
    }
    let referredUser = {};
    if (fromCoupon !== undefined) {
      referredUser = await Users.findOne({ couponCode: newUser.fromCoupon });
      if (!referredUser) {
        throw ERROR_MESSAGE.USER_NOT_FOUND;
      }
      const signUpFriends = referredUser.signUpFriends + Number(INCREMENT);
      const specialCredit = referredUser.specialCredit + Number(SIGNUP_POINTS);
      await Users.findByIdAndUpdate(referredUser.id, { signUpFriends, specialCredit });
    }
    user = await Users.findById(newUser.id);
    await Users.findByIdAndUpdate(user.id, { lastLogin: new Date() });
    user = await Users.findById(user.id);
    token = jwt.sign(
      {
        user: {
          userId: user.id,
          email: user.email,
          createdAt: user.lastLogin,
        },
      },
      process.env.SECRET,
    );
    delete user.password;
    await UserActivities.create({ user: user.id, activity: 'User Logged In' });
    return successResponse(req, res, { userExists: false, token, user });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const adClickCount = async (req, res) => {
  try {
    const { imgName } = req.body;
    let createAdImageObj;
    let adDetails = await AdvertisImages.findOne({ imgName, user: req.user.userId });
    if (!adDetails) {
      adDetails = await DestinationTourImages.findOne({ imgName });
      createAdImageObj = {
        imgName,
        webUrl: adDetails.webURL,
        user: req.user.userId,
        description: adDetails.description,
      };
      adDetails = await AdvertisImages.create(createAdImageObj);
    } else {
      adDetails = await AdvertisImages.findByIdAndUpdate(adDetails.id, {
        count: adDetails.count + 1,
      });
    }
    adDetails = await AdvertisImages.findById(adDetails.id);
    return successResponse(req, res, adDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const lodgeImages = async (req, res) => {
  try {
    const { url } = req.body;
    /* let lodgeImages = await LodgeImages.find();
    if (!lodgeImages) { */
    let images = await LodgeImages.create({ imgUrl: url });
    images = await LodgeImages.find();
    return successResponse(req, res, images);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const destinationTourClickCount = async (req, res) => {
  try {
    const { imgName } = req.body;
    let createAdImageObj;
    let destTourDetails = await DestinationTourImages.findOne({ imgName, user: req.user.userId });
    if (!destTourDetails) {
      destTourDetails = await DestinationTourImages.findOne({ imgName });
      createAdImageObj = {
        imgName,
        webUrl: destTourDetails.webURL,
        user: req.user.userId,
        description: destTourDetails.description,
      };
      destTourDetails = await DestinationTourImages.create(createAdImageObj);
    } else {
      destTourDetails = await DestinationTourImages.findByIdAndUpdate(destTourDetails.id, {
        count: destTourDetails.count + 1,
      });
    }
    destTourDetails = await DestinationTourImages.findById(destTourDetails.id);
    return successResponse(req, res, destTourDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const youTubeVideoId = async () => {
  const channelId1 = 'UC3DFdy_qc-cqgKCyQTHLGzA';
  const channelId2 = 'UCywMHpWJsb9GXD0lakYf6WA';
  const url1 = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId1}&part=snippet,id&order=date&maxResults=1`;
  const url2 = `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId2}&part=snippet,id&order=date&maxResults=1`;
  const channelData1 = await axios.get(url1);
  const channelData2 = await axios.get(url2);
  await YoutubeVideos.deleteMany();
  await YoutubeVideos.create({
    videoId: JSON.parse(JSON.stringify(channelData1.data.items[0].id.videoId)),
    snippet: JSON.parse(JSON.stringify(channelData1.data.items[0].snippet)),
  });
  await YoutubeVideos.create({
    videoId: JSON.parse(JSON.stringify(channelData2.data.items[0].id.videoId)),
    snippet: JSON.parse(JSON.stringify(channelData2.data.items[0].snippet)),
  });
  return 1;
};

export const getAllUsers = async (req, res) => {
  try {
    const skip = parseInt(req.query.skip || 0, 10);
    const limit = parseInt(req.query.limit || 10, 10);
    let users = [];
    const userDetail = await Users.find().skip(skip)
      .limit(limit).select({
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        contactNumber: 1,
        roleCode: 1,
        accountType: 1,
        availableGuru: 1,
        deleted: 1,
        isAvailabilitySet: 1,
        dateCreate: 1,
      });
    userDetail.forEach(async (ele) => {
      let payoutMethod = true;
      if (!ele.merchantAccount && ele.paypalEmail === '') {
        payoutMethod = false;
      }
      let location = '';
      if (ele.roleCode === ROLE_CODE.BUSINESS) {
        const loc = await Locations.findOne({ user: ele.id, isPrimeLocation: true });
        location = `${loc.city}, ${loc.state}, ${loc.country}`;
      }
      if (ele.roleCode === ROLE_CODE.TOURGUIDE) {
        location = ele.tourTripLocation;
      }
      if (ele.roleCode === ROLE_CODE.PEOPLE) {
        if (ele.isAvailabilitySet) {
          const avail = await Availabilities.findOne({ user: ele.id });
          location = avail.locationName;
        } else {
          location = ele.homeTown;
        }
      }
      users.push({
        _id: ele.id,
        firstName: ele.firstName,
        lastName: ele.lastName,
        email: ele.email,
        contactNumber: ele.contactNumber,
        roleCode: ele.roleCode,
        accountType: ele.accountType,
        availableGuru: ele.availableGuru,
        deleted: ele.deleted,
        isAvailabilitySet: ele.isAvailabilitySet,
        dateCreate: ele.dateCreate,
        payoutMethod,
        location,
        pushNotification: ele.pushNotification,
      });
    });
    return successResponse(req, res, users);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const adminLogin = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email, deleted: false })
      .select({
        _id: 1, email: 1, accountType: 1, password: 1, roleCode: 1,
      });
    if (!user) {
      throw new Error('Incorrect Email Id/Password');
    }
    if (ROLE_CODE.ADMIN !== user.roleCode) {
      throw new Error('Access Forbidden');
    }
    if (req.body.password) {
      const reqPass = crypto
        .createHash('md5')
        .update(req.body.password || '')
        .digest('hex');
      if (reqPass !== user.password) {
        if (user.accountType === ACCOUNT_TYPE.EMAIL) {
          throw new Error('Incorrect Email Id/Password');
        } else {
          throw new Error(`Previosly you have logged-in with ${user.accountType}`);
        }
      }
    }
    await Users.findByIdAndUpdate(user.id, { lastLogin: new Date() });
    user = await Users.findById(user.id);
    const token = jwt.sign(
      {
        user: {
          userId: user.id,
          email: user.email,
          createdAt: user.lastLogin,
        },
      },
      process.env.SECRET,
    );
    delete user.password;
    return successResponse(req, res, { token });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const appOpenCount = async (req, res) => {
  try {
    const { deviceInfo } = req.body;
    let userDetails = await Users.findById(req.user.userId);
    if (!userDetails) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    let count = 0;
    count = userDetails.appOpenCount + 1;
    await Users.findByIdAndUpdate(userDetails.id, { appOpenCount: count, deviceInfo });
    await UserActivities.create({ user: userDetails.id, activity: 'User Logged In' });
    userDetails = await Users.findById(userDetails.id);
    return successResponse(req, res, userDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const bookLodge = async (req, res) => {
  try {
    const {
      firstName, lastName, interestedIn, maxOccupants, accomodationType,
      accomodationLocation, bikingPreference, bikeFriendlyAccomodation, previousExperience,
    } = req.body;
    const payload = {
      firstName,
      lastName,
      interestedIn,
      maxOccupants,
      accomodationType,
      accomodationLocation,
      bikingPreference,
      previousExperience,
      bikeFriendlyAccomodation,
      user: req.user.userId,
    };
    const lodgingDetails = await Lodges.create(payload);
    if (lodgingDetails) {
      await Users.findByIdAndUpdate(req.user.userId, { isLodgingFormFilled: true });
    }
    return successResponse(req, res, lodgingDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const chat = async (req, res) => {
  try {
    const { senderId, receiverId, channelUrl } = req.body;
    console.log(senderId, receiverId, channelUrl, '----------', req.body, '==========');
    let chatDetails = await Chats.findOne({ senderId, receiverId, channelUrl });
    if (!chatDetails) {
      chatDetails = await Chats.create({ senderId, receiverId, channelUrl });
    }
    return successResponse(req, res, chatDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const individualHostRegister = async (req, res) => {
  try {
    const {
      firstName, lastName, userName, email, password, dateOfBirth, currentLoggedInDeviceId,
      verifyToken, profilePic, contactNumber, roleCode, accountType, address, bio, country,
      businessType, businessName, businessEmail, webURL, numberOfEMP, taxNumber, aboutBusiness,
      businessAddress, startDay, endDay, startTime, endTime, height, state, city, zipCode, gender,
      businessDocument, languages, purpose, availableGuru, organizationName, organizationEmail,
      organizationType, organizationAddress, availableFor, tourExperience, tourSkills, tourDocument,
      tourTripLocation, interestedIn, fromCoupon, appleUserId, serviceOffered, discount, price,
      placeId, locationName, aboutlocation, duration, rideCategory, availabilityLanguages, mtbSpeed,
      mtbRidePreference, cyclingSpeed, availableDaysAndTime, groupSize, whatsIncludes,
      cyclingPreference, highLights, minDuration, availabilitybio, maxDuration,
      individual, business, destination, funding, tosAccepted, paypalEmail, defaultPayout,
    } = req.body;
    const user = await Users.findOne({ email });
    /* if (user && !user.deleted) {
      throw new Error('User already exists with same email');
    } */
    if (roleCode !== ROLE_CODE.PEOPLE) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    let reqPass;
    if (password) {
      reqPass = crypto
        .createHash('md5')
        .update(password)
        .digest('hex');
    }
    let latitude = 0;
    let longitude = 0;
    let payload = {
      email,
      firstName: firstName || '',
      lastName: lastName || '',
      userName: userName || '',
      dateOfBirth: dateOfBirth || '',
      contactNumber: contactNumber || '',
      accountType: accountType || '',
      roleCode: roleCode || '',
      languages: languages || [],
      purpose: purpose || [],
      availableGuru: availableGuru || false,
      profilePic: profilePic || '',
      address: address || '',
      bio: bio || '',
      businessDocument: businessDocument || '',
      country: country || '',
      businessType: businessType || '',
      businessName: businessName || '',
      businessEmail: businessEmail || '',
      webURL: webURL || '',
      numberOfEMP: numberOfEMP || '',
      taxNumber: taxNumber || '',
      aboutBusiness: aboutBusiness || '',
      businessAddress: businessAddress || '',
      startDay: startDay || '',
      endDay: endDay || '',
      startTime: startTime || '',
      endTime: endTime || '',
      height: height || '',
      state: state || '',
      city: city || '',
      zipCode: zipCode || '',
      gender: gender || '',
      organizationName: organizationName || '',
      organizationEmail: organizationEmail || '',
      organizationType: organizationType || '',
      organizationAddress: organizationAddress || '',
      availableFor: availableFor || AVAILABLE_FOR_DEFAULT,
      tourExperience: tourExperience || '',
      tourSkills: tourSkills || '',
      tourDocument: tourDocument || '',
      tourTripLocation: tourTripLocation || '',
      interestedIn: interestedIn || INTERESTEDIN_DEFAULT,
      fromCoupon: fromCoupon || '',
      appleUserId: appleUserId || '',
      verifyToken: verifyToken || '',
      password: reqPass || '',
      isAvailabilitySet: false,
      isVerified: true,
      serviceOffered,
      discount,
      latitude,
      longitude,
      defaultPayout,
      paypalEmail: paypalEmail || '',
      currentLoggedInDeviceId,
      couponCode: uniqueId(7),
      dateCreate: new Date(),
    };
    let newUser;
    if (user) {
      payload = {
        ...payload,
        deleted: false,
      };
      newUser = await Users.findByIdAndUpdate(user.id, payload);
    } else {
      newUser = await Users.create(payload);
    }
    let referredUser = {};
    if (fromCoupon !== undefined) {
      referredUser = await Users.findOne({ couponCode: newUser.fromCoupon });
      if (!referredUser) {
        throw ERROR_MESSAGE.USER_NOT_FOUND;
      }
      const signUpFriends = referredUser.signUpFriends + Number(INCREMENT);
      const specialCredit = referredUser.specialCredit + Number(SIGNUP_POINTS);
      await Users.findByIdAndUpdate(referredUser.id, { signUpFriends, specialCredit });
    }
    let userDetail = await Users.findByIdAndUpdate(newUser.id, { lastLogin: new Date() });
    userDetail = await Users.findById(userDetail.id);
    // set Availability
    let createAvailibilityObj = {};
    let selectObject = {};

    if (!userDetail.availableGuru) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const existingAvailibilityData = await Availabilities.findOne({ user: userDetail.id, isActive: true }).select('_id');
    if (existingAvailibilityData) {
      throw new Error(ERROR_MESSAGE.GURU_AVAILABILITY_EXISTS);
    }
    if (placeId !== '') {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
      const locationData = await axios.get(url);
      latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
      longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
    }
    selectObject = {
      price: 1,
      placeId: 1,
      availabilityType: 1,
      user: 1,
      locationName: 1,
      aboutlocation: 1,
      // duration: 1,
      availableDaysAndTime: 1,
      rideCategory: 1,
      languages: 1,
      mtbSpeed: 1,
      mtbRidePreference: 1,
      cyclingSpeed: 1,
      whatsIncludes: 1,
      groupSize: 1,
      cyclingPreference: 1,
      highLights: 1,
      dateUpdate: 1,
      isActive: 1,
      latitude: 1,
      longitude: 1,
      bio: 1,
      requiredFieldAvailable: 1,
    };
    createAvailibilityObj = {
      user: userDetail.id,
      placeId,
      locationName,
      price,
      availabilityType: AVAILABILITYTYPE.GURU,
      aboutlocation,
      duration,
      availableDaysAndTime,
      rideCategory,
      languages: availabilityLanguages,
      mtbSpeed,
      mtbRidePreference,
      cyclingSpeed,
      whatsIncludes,
      groupSize,
      cyclingPreference,
      highLights,
      isActive: true,
      minDuration,
      maxDuration,
      latitude,
      longitude,
      bio: availabilitybio,
    };
    const availability = await Availabilities.create(createAvailibilityObj);
    if ((availability.maxDuration === 0) || (availability.bio === '')
      || (availability.minDuration === 0) || (availability.placeId === '')
      || (availability.aboutlocation === '') || (availability.availableDaysAndTime === [])
      || (availability.whatsIncludes === []) || (availability.groupSize === 0)) {
      await Availabilities.findByIdAndUpdate(availability.id, { requiredFieldAvailable: false });
    } else {
      await Availabilities.findByIdAndUpdate(availability.id, { requiredFieldAvailable: true });
    }
    if ((availability.rideCategory[0].key === 'Mountain Biking' && availability.rideCategory[0].checked === false)
      && (availability.rideCategory[1].key === 'Road Cycling' && availability.rideCategory[1].checked === false)
      && (availability.rideCategory[2].key === 'Electric Mountain Biking' && availability.rideCategory[2].checked === false)
      && (availability.rideCategory[3].key === 'Electric Road Cycling' && availability.rideCategory[3].checked === false)) {
      await Availabilities.findByIdAndUpdate(availability.id, { requiredFieldAvailable: false });
    }
    const isFalse = element => element.checked === false;
    if (availability.languages.every(isFalse)) {
      await Availabilities.findByIdAndUpdate(availability.id, { requiredFieldAvailable: false });
    }
    await Users.findByIdAndUpdate(userDetail.id, { isAvailabilitySet: true });
    const response = await Availabilities.findById(availability.id).populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        profilePic: 1,
        roleCode: 1,
        currentLoggedInDeviceId: 1,
        isAvailabilitySet: 1,
      },
    }).select(selectObject);
    await UserActivities.create({ user: userDetail.id, activity: 'Added Availability' });
    let merchantAccount;
    if (userDetail.defaultPayout === 'bank') {
      merchantAccount = await braintree.createMerchantAccount(
        userDetail.id,
        individual,
        business,
        funding,
        destination,
        tosAccepted,
      );
      if (merchantAccount) {
        await Users.findByIdAndUpdate(
          userDetail.id,
          {
            isMerchantAccount: true,
            dateUpdate: new Date(),
          },
        );
      }
    }
    const token = jwt.sign(
      {
        user: {
          userId: userDetail.id,
          email: userDetail.email,
          createdAt: userDetail.lastLogin,
        },
      },
      process.env.SECRET,
    );
    delete userDetail.password;
    const mailUser = {
      email: userDetail.email,
      name: userDetail.firstName,
    };
    await sendEmail(email, 'Welcome to JAGZ - The Biking App', temp.Welcome(mailUser.name));
    return successResponse(req, res, {
      token, userDetail, response, merchantAccount,
    });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const dashboard = async (req, res) => {
  try {
    const groupBy = (array, key) => array.reduce((result, currentValue) => {
      let count = 0;
      (result[currentValue[key]] = result[currentValue[key]] || []).push(count += 1);
      return result;
    }, {});

    // Users Count
    const users = await Users.find();
    const groupByRoleCode = groupBy(users, 'roleCode');
    const userCount = [];
    Object.keys(groupByRoleCode).forEach((ele) => {
      userCount.push({ [ele]: groupByRoleCode[ele].length });
    });
    userCount.push({ TOTALUSERS: users.length });

    // Users per month count
    const userMonth = [];
    users.forEach((ele) => {
      const month = new Date(ele.dateCreate).getMonth() + 1;
      userMonth.push({ id: ele._id, month });
    });
    const groupByuser = groupBy(userMonth, 'month');
    const userPerMonthCount = [];
    Object.keys(groupByuser).forEach((ele) => {
      userPerMonthCount.push({ [ele]: groupByuser[ele].length });
    });

    // Total Hosts vs Regular Users
    const totalHosts = await Users.countDocuments({ availableGuru: true });
    const regularUsers = await Users.countDocuments({ availableGuru: false });

    // Bookings Count
    const bookingCount = await Bookings.countDocuments({});

    // Bookings per month count
    const bookings = await Bookings.find();
    const bookingMonth = [];
    bookings.forEach((ele) => {
      const month = new Date(ele.dateCreate).getMonth() + 1;
      bookingMonth.push({ id: ele._id, month });
    });
    const groupByBooking = groupBy(bookingMonth, 'month');
    const bookingPerMonthCount = [];
    Object.keys(groupByBooking).forEach((ele) => {
      bookingPerMonthCount.push({ [ele]: groupByBooking[ele].length });
    });

    // Transaction amount Count
    const transactionAmount = await Transactions.find().select({ _id: 0, cost: 1 });
    const groupByCost = (array, key) => array.reduce((a, b) => a + (b[key] || 0), 0);
    const totalAmount = groupByCost(transactionAmount, 'cost');

    // Transaction per month count
    const transactionMonth = [];
    const transactions = await Transactions.find();
    transactions.forEach((ele) => {
      const month = new Date(ele.date).getMonth() + 1;
      transactionMonth.push({ id: ele._id, month, cost: ele.cost });
    });
    const groupByTransactionMonth = (array, key) => array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue.cost);
      return result;
    }, {});
    const groupByTransaction = groupByTransactionMonth(transactionMonth, 'month');
    const transactionPerMonthCount = [];
    Object.keys(groupByTransaction).forEach((ele) => {
      const groupByMonthCost = array => array.reduce((a, b) => a + (b || 0), 0);
      const totalAmountPerMonth = groupByMonthCost(groupByTransaction[ele]);
      transactionPerMonthCount.push({ [ele]: totalAmountPerMonth });
    });

    // Total Profit Current Week And Daily
    let weeklyBookingAmount = 0;
    let dailyBookingAmount = 0;
    transactions.forEach((ele) => {
      const transactionDate = new Date(ele.date);
      const isWeek = isThisWeek(transactionDate);
      if (isWeek) {
        weeklyBookingAmount += 1;
      }
      const currDate = new Date();
      if (transactionDate === currDate) {
        dailyBookingAmount += 1;
      }
    });

    // Profit as per roles
    const bookingAmount = await Bookings.find({ payment: true })
      .populate({
        path: 'user',
        select: {
          _id: 1,
          roleCode: 1,
        },
      });
    let totalProfitTourGuide = 0;
    let totalProfitOtherUser = 0;
    bookingAmount.forEach((ele) => {
      if (ele.user.roleCode === ROLE_CODE.TOURGUIDE) {
        const serviceAmount = (ele.cost * TOURGUIDE_SERVICE_FREE_AMOUNT) / 100;
        totalProfitTourGuide += serviceAmount;
      } else {
        const serviceAmount = (ele.cost * SERVICE_FREE_AMOUNT) / 100;
        totalProfitOtherUser += serviceAmount;
      }
    });
    return successResponse(req, res, {
      userCount,
      userPerMonthCount,
      bookingCount,
      bookingPerMonthCount,
      totalAmount,
      transactionPerMonthCount,
      weeklyBookingAmount,
      dailyBookingAmount,
      totalProfitOtherUser,
      totalProfitTourGuide,
      totalHosts,
      regularUsers,
    });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const becomeHost = async (req, res) => {
  try {
    const { email } = req.body;
    await sendEmail(email, 'Become a Host', temp.BecomeHost('Shweta'));
    return successResponse(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oldUser = async (req, res) => {
  try {
    const { email } = req.body;
    // await addContact(email, 'Shweta', 'Yadav');
    /* fs.readFile('/home/abc/Documents/userold.json', async (err, data) => {
      if (err) throw err;
      const user = JSON.parse(data);
      console.log(user.length);
      for (let i = 9001; i < user.length; i++) {
        // eslint-disable-next-line no-await-in-loop
        await sendEmail(user[i].email, 'Update your app! Brand New version of JAGZ/MTBguru available', temp.oldUserEmailPart2('Shweta'));
        console.log(i, '==========', user[i].email, user[i].name);
      }
    }); */
    return successResponse(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getUserDetailsById = async (req, res) => {
  try {
    const user = await Users.findById(req.body.userId);
    let availability = [];
    let location = [];
    if (user.isAvailabilitySet) {
      availability = await Availabilities.find({ user: user.id });
    }
    if (user.roleCode === ROLE_CODE.BUSINESS) {
      location = await Locations.find({ user: user.id });
    }
    return successResponse(req, res, { user, availability, location });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getDocs = async (req, res) => {
  try {
    return successResponse(req, res, POLICY_LINKS);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getCheckboxValues = async (req, res) => {
  try {
    const hostCheckboxData = {
      whatsIncludes: [
        { key: 'Lunch', checked: false },
        { key: 'Dinner', checked: false },
        { key: 'Water', checked: false },
        { key: 'Snacks', checked: false },
        { key: 'Hotel Pickup & Dropoff', checked: false },
        { key: 'Beer (for those 21 and older)', checked: false },
        { key: 'Bike Transport', checked: false },
      ],
      rideChoice: [
        { key: 'Mountain Biking', checked: false },
        { key: 'Road Cycling', checked: false },
        { key: 'Electric Mountain Biking', checked: false },
        { key: 'Electric Road Cycling', checked: false },
        { key: 'Gravel Ride', checked: false },
      ],
      languages: [
        { key: 'English', checked: false },
        { key: 'German', checked: false },
        { key: 'Spanish', checked: false },
        { key: 'Dutch', checked: false },
        { key: 'French', checked: false },
      ],
      mtbRideSpeed: [
        { key: 'Crazy Fast', checked: false },
        { key: 'Steady Pace', checked: false },
        { key: 'Social', checked: false },
        { key: 'Slow', checked: false },
      ],
      mtbRideOptions: [
        { key: 'Cross country', checked: false },
        { key: 'Technical', checked: false },
        { key: 'Downhill', checked: false },
        { key: 'All Mountain', checked: false },
        { key: 'Sufferfest', checked: false },
        { key: 'E-Bikes', checked: false },
        { key: 'Fat Biking', checked: false },
      ],
      cyclingSpeed: [
        { key: '14 to 16 MPH', checked: false },
        { key: '17 to 19 MPH', checked: false },
        { key: '20 to 22 MPH', checked: false },
      ],
      cyclingOptions: [
        { key: 'Hilly', checked: false },
        { key: 'Flat', checked: false },
        { key: 'Rolling', checked: false },
        { key: 'Difficult', checked: false },
        { key: 'Moderate', checked: false },
      ],
    };
    const hostDropDownData = {
      groupSize: [
        { value: 'Up to 1 People' },
        { value: 'Up to 2 People' },
        { value: 'Up to 3 People' },
        { value: 'Up to 4 People' },
        { value: 'Up to 5 People' },
        { value: 'Up to 6 People' },
        { value: 'Up to 7 People' },
        { value: 'Up to 8 People' },
        { value: 'Up to 9 People' },
        { value: 'Up to 10 People' },
      ],
      duration: [
        { value: '1 hour' },
        { value: '2 hours' },
        { value: '3 hours' },
        { value: '4 hours' },
        { value: '5 hours' },
        { value: '6 hours' },
        { value: '7 hours' },
        { value: '8 hours' },
        { value: '9 hours' },
        { value: '10 hours' },
      ],
      startingDay: [
        { value: 'Sunday' },
        { value: 'Monday' },
        { value: 'Tuesday' },
        { value: 'Wednesday' },
        { value: 'Thursday' },
        { value: 'Friday' },
        { value: 'Saturday' },
      ],
      timeData: [
        { value: '05:00 AM' },
        { value: '06:00 AM' },
        { value: '07:00 AM' },
        { value: '08:00 AM' },
        { value: '09:00 AM' },
        { value: '10:00 AM' },
        { value: '11:00 AM' },
        { value: '12:00 PM' },
        { value: '01:00 PM' },
        { value: '02:00 PM' },
        { value: '03:00 PM' },
        { value: '04:00 PM' },
        { value: '05:00 PM' },
        { value: '06:00 PM' },
        { value: '07:00 PM' },
        { value: '08:00 PM' },
        { value: '09:00 PM' },
        { value: '10:00 PM' },
        { value: '11:00 PM' },
        { value: '12:00 AM' },
        { value: '01:00 AM' },
        { value: '02:00 AM' },
        { value: '03:00 AM' },
        { value: '04:00 AM' },
      ],
    };
    const tgCheckboxData = {
      tourOptions: [
        { key: 'Mountain Biking', checked: false },
        { key: 'Road Cycling', checked: false },
        { key: 'Electric Mountain Biking', checked: false },
        { key: 'Electric Road Cycling', checked: false },
        { key: 'Gravel Ride', checked: false },
      ],
      languages: [
        { key: 'English', checked: false },
        { key: 'German', checked: false },
        { key: 'Spanish', checked: false },
        { key: 'Dutch', checked: false },
        { key: 'French', checked: false },
      ],
      whatsIncludes: [
        { key: 'Lunch', checked: false },
        { key: 'Dinner', checked: false },
        { key: 'Water', checked: false },
        { key: 'Snacks', checked: false },
        { key: 'Hotel Pickup & Dropoff', checked: false },
        { key: 'Beer (for those 21 and older)', checked: false },
        { key: 'Helmet', checked: false },
        { key: 'Flat Pedals', checked: false },
        { key: 'Clipless Pedals', checked: false },
        { key: 'Hydration Pack', checked: false },
        { key: 'Gloves', checked: false },
      ],
    };
    const tgDropDownData = {
      skillLevel: [
        { value: 'Beginner' },
        { value: 'Intermediate' },
        { value: 'Advanced' },
      ],
      maxGroupSize: [
        { value: '1 Rider' },
        { value: '2 Riders' },
        { value: '3 Riders' },
        { value: '4 Riders' },
        { value: '5 Riders' },
        { value: '6 Riders' },
        { value: '7 Riders' },
        { value: '8 Riders' },
        { value: '9 Riders' },
        { value: '10 + Riders' },
      ],
      startDay: [
        { value: 'Sunday' },
        { value: 'Monday' },
        { value: 'Tuesday' },
        { value: 'Wednesday' },
        { value: 'Thursday' },
        { value: 'Friday' },
        { value: 'Saturday' },
      ],
      timeData: [
        { value: '05:00 AM' },
        { value: '06:00 AM' },
        { value: '07:00 AM' },
        { value: '08:00 AM' },
        { value: '09:00 AM' },
        { value: '10:00 AM' },
        { value: '11:00 AM' },
        { value: '12:00 PM' },
        { value: '01:00 PM' },
        { value: '02:00 PM' },
        { value: '03:00 PM' },
        { value: '04:00 PM' },
        { value: '05:00 PM' },
        { value: '06:00 PM' },
        { value: '07:00 PM' },
        { value: '08:00 PM' },
        { value: '09:00 PM' },
        { value: '10:00 PM' },
        { value: '11:00 PM' },
        { value: '12:00 AM' },
        { value: '01:00 AM' },
        { value: '02:00 AM' },
        { value: '03:00 AM' },
        { value: '04:00 AM' },
      ],
      discountPersonData: [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: '10' },
      ],
      discountPercentageData: [
        { value: '10%' },
        { value: '20%' },
        { value: '30%' },
        { value: '40%' },
        { value: '50%' },
        { value: '60%' },
      ],
    };
    const businessDropDownData = {
      businessCategory: [
        { value: 'Bike Shop' },
        { value: 'Tour Company' },
        { value: 'Hotels & Lodging' },
        { value: 'Food & Drink' },
        { value: 'Gear & Equipment' },
        { value: 'Clothing & Apparel' },
        { value: 'Bike Services' },
        { value: 'Other' },
      ],
      openCloseTime: [
        { value: '24 hours' },
        { value: '09:00 AM' },
        { value: '09:30 AM' },
        { value: '10:00 AM' },
        { value: '10:30 AM' },
        { value: '11:00 AM' },
        { value: '11:30 AM' },
        { value: '12:00 PM' },
        { value: '12:30 PM' },
        { value: '01:00 PM' },
        { value: '01:30 PM' },
        { value: '02:00 PM' },
        { value: '02:30 PM' },
        { value: '03:00 PM' },
        { value: '03:30 PM' },
        { value: '04:00 PM' },
        { value: '04:30 PM' },
        { value: '05:00 PM' },
        { value: '05:30 PM' },
        { value: '06:00 PM' },
        { value: '06:30 PM' },
        { value: '07:00 PM' },
        { value: '07:30 PM' },
        { value: '08:00 PM' },
        { value: '08:30 PM' },
        { value: '09:00 PM' },
        { value: '09:30 PM' },
        { value: '10:00 PM' },
        { value: '10:30 PM' },
        { value: '11:00 PM' },
        { value: '11:30 PM' },
        { value: '12:00 AM' },
        { value: '12:30 AM' },
        { value: '01:00 AM' },
        { value: '01:30 AM' },
        { value: '02:00 AM' },
        { value: '02:30 AM' },
        { value: '03:00 AM' },
        { value: '03:30 AM' },
        { value: '04:00 AM' },
        { value: '04:30 AM' },
        { value: '05:00 AM' },
        { value: '05:30 AM' },
        { value: '06:00 AM' },
        { value: '06:30 AM' },
        { value: '07:00 AM' },
        { value: '07:30 AM' },
        { value: '08:00 AM' },
        { value: '08:30 AM' },
      ],
    };
    const businessCheckboxData = {
      services: [
        { key: 'Bike Repairs', checked: false },
        { key: 'Bike Rentals', checked: false },
        { key: 'Tours', checked: false },
        { key: 'Shuttling Service', checked: false },
        { key: 'Gear Rentals', checked: false },
      ],
      toggleButtonData: [
        { id: 1, key: 'Monday', value: false },
        { id: 2, key: 'Tuesday', value: false },
        { id: 3, key: 'Wednesday', value: false },
        { id: 4, key: 'Thursday', value: false },
        { id: 5, key: 'Friday', value: false },
        { id: 6, key: 'Saturday', value: false },
        { id: 7, key: 'Sunday', value: false },
      ],
    };
    const response = {
      hostCheckboxData,
      hostDropDownData,
      tgCheckboxData,
      tgDropDownData,
      businessDropDownData,
      businessCheckboxData,
    };
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const updateDB = async (req, res) => {
  try {
    const hostCheckboxData = {
      whatsIncludes: [
        { key: 'Lunch', checked: false },
        { key: 'Dinner', checked: false },
        { key: 'Water', checked: false },
        { key: 'Snacks', checked: false },
        { key: 'Hotel Pickup & Dropoff', checked: false },
        { key: 'Beer (for those 21 and older)', checked: false },
        { key: 'Bike Transport', checked: false },
      ],
      rideChoice: [
        { key: 'Mountain Biking', checked: false },
        { key: 'Road Cycling', checked: false },
        { key: 'Electric Mountain Biking', checked: false },
        { key: 'Electric Road Cycling', checked: false },
        { key: 'Gravel Ride', checked: false },
      ],
      languages: [
        { key: 'English', checked: false },
        { key: 'German', checked: false },
        { key: 'Spanish', checked: false },
        { key: 'Dutch', checked: false },
        { key: 'French', checked: false },
      ],
      mtbRideSpeed: [
        { key: 'Crazy Fast', checked: false },
        { key: 'Steady Pace', checked: false },
        { key: 'Social', checked: false },
        { key: 'Slow', checked: false },
      ],
      mtbRideOptions: [
        { key: 'Cross country', checked: false },
        { key: 'Technical', checked: false },
        { key: 'Downhill', checked: false },
        { key: 'All Mountain', checked: false },
        { key: 'Sufferfest', checked: false },
        { key: 'E-Bikes', checked: false },
        { key: 'Fat Biking', checked: false },
      ],
      cyclingSpeed: [
        { key: '14 to 16 MPH', checked: false },
        { key: '17 to 19 MPH', checked: false },
        { key: '20 to 22 MPH', checked: false },
      ],
      cyclingOptions: [
        { key: 'Hilly', checked: false },
        { key: 'Flat', checked: false },
        { key: 'Rolling', checked: false },
        { key: 'Difficult', checked: false },
        { key: 'Moderate', checked: false },
      ],
    };
    const hostDropDownData = {
      groupSize: [
        { value: 'Up to 1 People' },
        { value: 'Up to 2 People' },
        { value: 'Up to 3 People' },
        { value: 'Up to 4 People' },
        { value: 'Up to 5 People' },
        { value: 'Up to 6 People' },
        { value: 'Up to 7 People' },
        { value: 'Up to 8 People' },
        { value: 'Up to 9 People' },
        { value: 'Up to 10 People' },
      ],
      duration: [
        { value: '1 hour' },
        { value: '2 hours' },
        { value: '3 hours' },
        { value: '4 hours' },
        { value: '5 hours' },
        { value: '6 hours' },
        { value: '7 hours' },
        { value: '8 hours' },
        { value: '9 hours' },
        { value: '10 hours' },
      ],
      startingDay: [
        { value: 'Sunday' },
        { value: 'Monday' },
        { value: 'Tuesday' },
        { value: 'Wednesday' },
        { value: 'Thursday' },
        { value: 'Friday' },
        { value: 'Saturday' },
      ],
      timeData: [
        { value: '05:00 AM' },
        { value: '06:00 AM' },
        { value: '07:00 AM' },
        { value: '08:00 AM' },
        { value: '09:00 AM' },
        { value: '10:00 AM' },
        { value: '11:00 AM' },
        { value: '12:00 PM' },
        { value: '01:00 PM' },
        { value: '02:00 PM' },
        { value: '03:00 PM' },
        { value: '04:00 PM' },
        { value: '05:00 PM' },
        { value: '06:00 PM' },
        { value: '07:00 PM' },
        { value: '08:00 PM' },
        { value: '09:00 PM' },
        { value: '10:00 PM' },
        { value: '11:00 PM' },
        { value: '12:00 AM' },
        { value: '01:00 AM' },
        { value: '02:00 AM' },
        { value: '03:00 AM' },
        { value: '04:00 AM' },
      ],
    };
    const tgCheckboxData = {
      tourOptions: [
        { key: 'Mountain Biking', checked: false },
        { key: 'Road Cycling', checked: false },
        { key: 'Electric Mountain Biking', checked: false },
        { key: 'Electric Road Cycling', checked: false },
        { key: 'Gravel Ride', checked: false },
      ],
      languages: [
        { key: 'English', checked: false },
        { key: 'German', checked: false },
        { key: 'Spanish', checked: false },
        { key: 'Dutch', checked: false },
        { key: 'French', checked: false },
      ],
      whatsIncludes: [
        { key: 'Lunch', checked: false },
        { key: 'Dinner', checked: false },
        { key: 'Water', checked: false },
        { key: 'Snacks', checked: false },
        { key: 'Hotel Pickup & Dropoff', checked: false },
        { key: 'Beer (for those 21 and older)', checked: false },
        { key: 'Helmet', checked: false },
        { key: 'Flat Pedals', checked: false },
        { key: 'Clipless Pedals', checked: false },
        { key: 'Hydration Pack', checked: false },
        { key: 'Gloves', checked: false },
      ],
    };
    const tgDropDownData = {
      skillLevel: [
        { value: 'Beginner' },
        { value: 'Intermediate' },
        { value: 'Advanced' },
      ],
      maxGroupSize: [
        { value: '1 Rider' },
        { value: '2 Riders' },
        { value: '3 Riders' },
        { value: '4 Riders' },
        { value: '5 Riders' },
        { value: '6 Riders' },
        { value: '7 Riders' },
        { value: '8 Riders' },
        { value: '9 Riders' },
        { value: '10 + Riders' },
      ],
      startDay: [
        { value: 'Sunday' },
        { value: 'Monday' },
        { value: 'Tuesday' },
        { value: 'Wednesday' },
        { value: 'Thursday' },
        { value: 'Friday' },
        { value: 'Saturday' },
      ],
      timeData: [
        { value: '05:00 AM' },
        { value: '06:00 AM' },
        { value: '07:00 AM' },
        { value: '08:00 AM' },
        { value: '09:00 AM' },
        { value: '10:00 AM' },
        { value: '11:00 AM' },
        { value: '12:00 PM' },
        { value: '01:00 PM' },
        { value: '02:00 PM' },
        { value: '03:00 PM' },
        { value: '04:00 PM' },
        { value: '05:00 PM' },
        { value: '06:00 PM' },
        { value: '07:00 PM' },
        { value: '08:00 PM' },
        { value: '09:00 PM' },
        { value: '10:00 PM' },
        { value: '11:00 PM' },
        { value: '12:00 AM' },
        { value: '01:00 AM' },
        { value: '02:00 AM' },
        { value: '03:00 AM' },
        { value: '04:00 AM' },
      ],
      discountPersonData: [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '7' },
        { value: '8' },
        { value: '9' },
        { value: '10' },
      ],
      discountPercentageData: [
        { value: '10%' },
        { value: '20%' },
        { value: '30%' },
        { value: '40%' },
        { value: '50%' },
        { value: '60%' },
      ],
    };
    const availabilityData = await Availabilities.find().populate({
      path: 'user',
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        email: 1,
        profilePic: 1,
        roleCode: 1,
        currentLoggedInDeviceId: 1,
        isAvailabilitySet: 1,
      },
    });
    availabilityData.forEach(async (ele) => {
      let showBanner;
      if (ele.user.roleCode === 'PEOPLE') {
        const isFalse = element => element.checked === false;
        if (ele.languages.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        if (ele.rideCategory.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        if (ele.availableDaysAndTime.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        if (ele.mtbRidePreference.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        if (ele.mtbSpeed.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        if (ele.cyclingSpeed.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        if (ele.highLights.every(isFalse)) {
          showBanner = true;
        } else {
          showBanner = false;
        }
        await Availabilities.findByIdAndUpdate(ele.id, { showBanner });
      }
    });
    const availabilityData2 = await Availabilities.find();
    return successResponse(req, res, availabilityData2);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const addNote = async (req, res) => {
  try {
    const { userId, notes } = req.body;
    await Users.findByIdAndUpdate(userId, { notes });
    const userDetails = await Users.findById(userId);
    return successResponse(req, res, userDetails);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
