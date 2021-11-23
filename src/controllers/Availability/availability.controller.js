import axios from 'axios';
import { successResponse, errorResponse } from '../../helpers';
import Availabilities from '../../models/Availabilities';
import Users from '../../models/Users';
import {
  ROLE_CODE, ERROR_MESSAGE, AVAILABILITYTYPE, BOOKING_STATUS,
} from '../../helpers/constants';
import Bookings from '../../models/Bookings';
import UserActivities from '../../models/UserActivities';
import Locations from '../../models/Locations';


// common delete API

export const deleteAvailability = async (req, res) => {
  try {
    const existingAvailibilityData = await Availabilities.findOne({
      _id: req.body.availability,
      isActive: true,
      user: req.user.userId,
    });
    if (!existingAvailibilityData) {
      throw new Error(ERROR_MESSAGE.AVAILABILITY_NOT_FOUND);
    }
    await Availabilities.findByIdAndUpdate(
      existingAvailibilityData.id,
      { isActive: false },
    );
    const availabilitiesCount = await Availabilities.find({
      user: req.user.userId,
      isActive: true,
    }).count();
    if (availabilitiesCount === 0) {
      await Users.findByIdAndUpdate(req.user.userId, { isAvailabilitySet: false });
    }
    const response = await Availabilities.findById(req.body.availability)
      .select({ _id: 1, tourName: 1, isActive: 1 });
    if (!response.isActive) {
      await Bookings.updateMany({
        availability: existingAvailibilityData.id,
        bookingStatus: BOOKING_STATUS.REQUESTED,
      }, { bookingStatus: BOOKING_STATUS.REJECTED });
    }
    await UserActivities.create({ user: req.user.userId, activity: 'Deleted Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Individual profile

export const getAvailability = async (req, res) => {
  try {
    const userData = await Users.findById(req.body.user);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    let selectObject = {};
    let data;
    if (userData.roleCode === ROLE_CODE.PEOPLE) {
      selectObject = {
        price: 1,
        user: 1,
        placeId: 1,
        availabilityType: 1,
        locationName: 1,
        aboutlocation: 1,
        duration: 1,
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
        minDuration: 1,
        maxDuration: 1,
        isPriority: 1,
        dateCreate: 1,
        dateUpdate: 1,
        bio: 1,
        requiredFieldAvailable: 1,
        isBikeRental: 1,
        bikeRentalDetails: 1,
        showBanner: 1,
      };
      data = await Availabilities.findOne({ user: userData.id, isActive: true })
        .select(selectObject);
    }
    const response = data || {};
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getGuruProfile = async (req, res) => {
  try {
    const selectObjectGuru = {
      firstName: 1,
      lastName: 1,
      bio: 1,
      email: 1,
      profilePic: 1,
      availableGuru: 1,
      dateOfBirth: 1,
      contactNumber: 1,
      roleCode: 1,
      height: 1,
      gender: 1,
      purpose: 1,
      interestedIn: 1,
      availableFor: 1,
      lastLogin: 1,
      address: 1,
      isAvailabilitySet: 1,
      currentLoggedInDeviceId: 1,
    };
    const selectObjectAvailibility = {
      price: 1,
      user: 1,
      placeId: 1,
      locationName: 1,
      availabilityType: 1,
      aboutlocation: 1,
      duration: 1,
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
      minDuration: 1,
      maxDuration: 1,
      isPriority: 1,
      bio: 1,
      requiredFieldAvailable: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    };
    const userData = await Users.findById(req.body.user).select(selectObjectGuru);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    let data;
    if (userData.roleCode === ROLE_CODE.PEOPLE) {
      data = await Availabilities.findOne({
        user: userData.id,
        isActive: true,
      }).select(selectObjectAvailibility);
    } else {
      data = await Availabilities.findOne({
        user: userData.id,
        isActive: true,
      }).select(selectObjectAvailibility);
    }
    const response = { userData: userData || {}, avaibilityData: data || {} };
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const editAvailability = async (req, res) => {
  try {
    let editAvailibilityObj = {};
    let selectObject = {};
    if (req.user.roleCode === ROLE_CODE.PEOPLE) {
      if (!req.user.availableGuru) {
        throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
      }
      const existingAvailibilityData = await Availabilities.findOne({
        availabilityType: AVAILABILITYTYPE.GURU,
        _id: req.body.availability,
      });
      if (!existingAvailibilityData) {
        throw new Error(ERROR_MESSAGE.GURU_AVAILABILITY_NOT_FOUND);
      }
      const {
        price, placeId, locationName, aboutlocation, duration, availableDaysAndTime,
        rideCategory, languages, mtbSpeed, mtbRidePreference, cyclingSpeed, whatsIncludes,
        groupSize, cyclingPreference, highLights, minDuration, maxDuration, bio,
      } = req.body;
      let latitude;
      let longitude;
      if (placeId) {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
        const locationData = await axios.get(url);
        latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
        longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
      }
      selectObject = {
        price: 1,
        placeId: 1,
        user: 1,
        availabilityType: 1,
        locationName: 1,
        aboutlocation: 1,
        duration: 1,
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
        minDuration: 1,
        maxDuration: 1,
        isActive: 1,
        isPriority: 1,
        dateUpdate: 1,
        latitude: 1,
        longitude: 1,
        bio: 1,
        requiredFieldAvailable: 1,
        showBanner: 1,
      };
      editAvailibilityObj = {
        placeId: placeId || existingAvailibilityData.placeId,
        locationName: locationName || existingAvailibilityData.locationName,
        price: price || existingAvailibilityData.price,
        aboutlocation: aboutlocation || existingAvailibilityData.aboutlocation,
        duration: duration || existingAvailibilityData.duration,
        availableDaysAndTime: availableDaysAndTime || existingAvailibilityData.availableDaysAndTime,
        rideCategory: rideCategory || existingAvailibilityData.rideCategory,
        languages: languages || existingAvailibilityData.languages,
        mtbSpeed: mtbSpeed || existingAvailibilityData.mtbSpeed,
        mtbRidePreference: mtbRidePreference || existingAvailibilityData.mtbRidePreference,
        cyclingSpeed: cyclingSpeed || existingAvailibilityData.cyclingSpeed,
        whatsIncludes: whatsIncludes || existingAvailibilityData.whatsIncludes,
        groupSize: groupSize || existingAvailibilityData.groupSize,
        cyclingPreference: cyclingPreference || existingAvailibilityData.cyclingPreference,
        highLights: highLights || existingAvailibilityData.highLights,
        minDuration: minDuration || existingAvailibilityData.minDuration,
        maxDuration: maxDuration || existingAvailibilityData.maxDuration,
        latitude: latitude || existingAvailibilityData.latitude,
        longitude: longitude || existingAvailibilityData.longitude,
        bio: bio || existingAvailibilityData.bio,
      };
      if (price === 0) {
        editAvailibilityObj.price = price;
      }
      if ((editAvailibilityObj.duration === 0) || (editAvailibilityObj.minDuration === 0)
        || (editAvailibilityObj.maxDuration === 0) || (editAvailibilityObj.groupSize === 0)
        || (editAvailibilityObj.highLights === []) || (editAvailibilityObj.availableDaysAndTime === [])) {
        editAvailibilityObj.showBanner = true;
      } else {
        editAvailibilityObj.showBanner = false;
      }
      if ((editAvailibilityObj.bio === '') || (editAvailibilityObj.placeId === '')) {
        editAvailibilityObj.requiredFieldAvailable = false;
      } else {
        editAvailibilityObj.requiredFieldAvailable = true;
      }
      const isFalse = element => element.checked === false;
      if ((editAvailibilityObj.rideCategory.every(isFalse))
      || (editAvailibilityObj.languages.every(isFalse))) {
        editAvailibilityObj.showBanner = true;
      } else {
        editAvailibilityObj.showBanner = false;
      }
      if (editAvailibilityObj.rideCategory[0].key === 'Mountain Biking'
      && editAvailibilityObj.rideCategory[0].checked === true) {
        if ((editAvailibilityObj.mtbRidePreference.every(isFalse))
        || (editAvailibilityObj.mtbSpeed.every(isFalse))) {
          editAvailibilityObj.showBanner = true;
        } else {
          editAvailibilityObj.showBanner = false;
        }
      }
      if (editAvailibilityObj.rideCategory[1].key === 'Road Cycling'
      && editAvailibilityObj.rideCategory[1].checked === true) {
        if ((editAvailibilityObj.cyclingSpeed.every(isFalse))
        || (editAvailibilityObj.cyclingPreference.every(isFalse))) {
          editAvailibilityObj.showBanner = true;
        } else {
          editAvailibilityObj.showBanner = false;
        }
      }
      await Availabilities.findByIdAndUpdate(
        existingAvailibilityData.id, editAvailibilityObj,
      );
    }
    const response = await Availabilities.findById(req.body.availability).populate({
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
    await UserActivities.create({ user: response.user.id, activity: 'Edited Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const addAvailability = async (req, res) => {
  try {
    let createAvailibilityObj = {};
    let selectObject = {};
    if (req.user.roleCode !== ROLE_CODE.PEOPLE) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    if (!req.user.availableGuru) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const {
      price, placeId, locationName, aboutlocation, duration, availableDaysAndTime,
      rideCategory, languages, mtbSpeed, mtbRidePreference, cyclingSpeed,
      groupSize, whatsIncludes, cyclingPreference, highLights, minDuration, bio,
      maxDuration,
    } = req.body;
    const existingAvailibilityData = await Availabilities.findOne({ user: req.user.userId, isActive: true }).select('_id');
    if (existingAvailibilityData) {
      throw new Error(ERROR_MESSAGE.GURU_AVAILABILITY_EXISTS);
    }
    let latitude = 0;
    let longitude = 0;
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
      showBanner: 1,
    };
    createAvailibilityObj = {
      user: req.user.userId,
      placeId,
      locationName,
      price,
      availabilityType: AVAILABILITYTYPE.GURU,
      aboutlocation,
      duration,
      availableDaysAndTime,
      rideCategory,
      languages,
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
      bio,
    };
    if ((bio === '') || (placeId === '')) {
      createAvailibilityObj.requiredFieldAvailable = false;
    } else {
      createAvailibilityObj.requiredFieldAvailable = true;
    }
    if ((duration === 0) || (minDuration === 0) || (highLights === [])
      || (maxDuration === 0) || (groupSize === 0) || (availableDaysAndTime === [])) {
      createAvailibilityObj.showBanner = true;
    } else {
      createAvailibilityObj.showBanner = false;
    }
    const isFalse = element => element.checked === false;
    if ((rideCategory.every(isFalse)) || (languages.every(isFalse))) {
      createAvailibilityObj.showBanner = true;
    } else {
      createAvailibilityObj.showBanner = false;
    }
    if (rideCategory[0].key === 'Mountain Biking' && rideCategory[0].checked === true) {
      if ((mtbRidePreference.every(isFalse)) || (mtbSpeed.every(isFalse))) {
        createAvailibilityObj.showBanner = true;
      } else {
        createAvailibilityObj.showBanner = false;
      }
    }
    if (rideCategory[1].key === 'Road Cycling' && rideCategory[1].checked === true) {
      if ((cyclingSpeed.every(isFalse)) || (cyclingPreference.every(isFalse))) {
        createAvailibilityObj.showBanner = true;
      } else {
        createAvailibilityObj.showBanner = false;
      }
    }

    const availability = await Availabilities.create(createAvailibilityObj);
    await Users.findByIdAndUpdate(req.user.userId, { isAvailabilitySet: true });
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
    await UserActivities.create({ user: req.user.userId, activity: 'Added Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// tour guide profile

export const addTourAvailability = async (req, res) => {
  try {
    let createAvailibilityObj = {};
    let selectObject = {};
    if (req.user.roleCode !== ROLE_CODE.TOURGUIDE) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    /*  if (!req.user.isMerchantAccount && !req.user.paypalEmail) {
      throw new Error(ERROR_MESSAGE.MERCHANT_ACCOUNT_AND_PAYPALEMAIL_NOT_FOUND);
    } */
    const {
      tourName, placeId, locationName, aboutlocation, price, blockedDates, availableDaysAndTime,
      meetingPlace, tourSkills, rideCategory, tourMaxBooking, languages, isPriority, bikeRentalDetails,
      whatsIncludes, itinerary, availableDates, tourTime, highLights, tourDiscount, isBikeRental,
    } = req.body;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
    const locationData = await axios.get(url);
    const latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
    const longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
    /* if ((whatsIncludes[0].key === 'Lunch' && whatsIncludes[0].checked === false)
      && (whatsIncludes[1].key === 'Dinner' && whatsIncludes[1].checked === false)
      && (whatsIncludes[2].key === 'Water' && whatsIncludes[2].checked === false)
      && (whatsIncludes[3].key === 'Snacks' && whatsIncludes[3].checked === false)
      && (whatsIncludes[4].key === 'Hotel Pickup & Dropoff' && whatsIncludes[4].checked === false)
      && (whatsIncludes[5].key === 'Beer (for those 21 and older)' && whatsIncludes[5].checked === false)
      && (whatsIncludes[6].key === 'Nothing' && whatsIncludes[6].checked === false)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_WHAT_INCLUDES);
    } */
    const isFalse = element => element.checked === false;
    if (languages.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_LANGUAGE);
    }
    if (rideCategory.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_RIDE_CATEGORY);
    }
    selectObject = {
      user: 1,
      tourName: 1,
      placeId: 1,
      availabilityType: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      isActive: 1,
      isPriority: 1,
      blockedDates: 1,
      latitude: 1,
      longitude: 1,
      availableDaysAndTime: 1,
      bikeRentalDetails: 1,
      isBikeRental: 1,
    };
    createAvailibilityObj = {
      user: req.user.userId,
      availabilityType: AVAILABILITYTYPE.TOUR,
      tourName,
      placeId,
      locationName,
      aboutlocation,
      price,
      meetingPlace,
      tourSkills,
      rideCategory,
      tourMaxBooking,
      languages,
      whatsIncludes,
      itinerary,
      availableDates,
      tourTime,
      highLights,
      tourDiscount,
      blockedDates,
      isPriority: isPriority || false,
      isActive: true,
      latitude,
      longitude,
      availableDaysAndTime,
      bikeRentalDetails,
      isBikeRental,
    };
    const availability = await Availabilities.create(createAvailibilityObj);
    if (availability && !req.user.isAvailabilitySet) {
      await Users.findByIdAndUpdate(req.user.userId, { isAvailabilitySet: true });
    }
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
    await UserActivities.create({ user: req.user.userId, activity: 'Added Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const editTourAvailability = async (req, res) => {
  try {
    let editAvailibilityObj = {};
    let selectObject = {};
    const existingAvailibilityData = await Availabilities.findOne({
      availabilityType: AVAILABILITYTYPE.TOUR,
      _id: req.body.tourAvailabilityId,
      isActive: true,
    });
    if (!existingAvailibilityData) {
      throw new Error(ERROR_MESSAGE.TOUR_AVAILABILITY_NOT_FOUND);
    }
    if (req.user.roleCode !== ROLE_CODE.TOURGUIDE) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const {
      tourName, placeId, locationName, aboutlocation, price, blockedDates, availableDaysAndTime,
      meetingPlace, tourSkills, rideCategory, tourMaxBooking, languages, isPriority, isBikeRental,
      whatsIncludes, itinerary, availableDates, tourTime, highLights, tourDiscount, bikeRentalDetails,
    } = req.body;
    let latitude;
    let longitude;
    if (placeId) {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
      const locationData = await axios.get(url);
      latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
      longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
    }
    selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      isActive: 1,
      isPriority: 1,
      blockedDates: 1,
      latitude: 1,
      longitude: 1,
      availableDaysAndTime: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    };
    editAvailibilityObj = {
      tourName: tourName || existingAvailibilityData.tourName,
      placeId: placeId || existingAvailibilityData.placeId,
      locationName: locationName || existingAvailibilityData.locationName,
      aboutlocation: aboutlocation || existingAvailibilityData.aboutlocation,
      price: price || existingAvailibilityData.price,
      meetingPlace: meetingPlace || existingAvailibilityData,
      tourSkills: tourSkills || existingAvailibilityData.tourSkills,
      rideCategory: rideCategory || existingAvailibilityData.rideCategory,
      tourMaxBooking: tourMaxBooking || existingAvailibilityData.tourMaxBooking,
      languages: languages || existingAvailibilityData.languages,
      whatsIncludes: whatsIncludes || existingAvailibilityData.whatsIncludes,
      itinerary: itinerary || existingAvailibilityData.itinerary,
      availableDates: availableDates || existingAvailibilityData.availableDates,
      tourTime: tourTime || existingAvailibilityData.tourTime,
      highLights: highLights || existingAvailibilityData.highLights,
      tourDiscount: tourDiscount || existingAvailibilityData.tourDiscount,
      isPriority: isPriority || existingAvailibilityData.isPriority,
      blockedDates: blockedDates || existingAvailibilityData.blockedDates,
      latitude: latitude || existingAvailibilityData.latitude,
      longitude: longitude || existingAvailibilityData.longitude,
      availableDaysAndTime: availableDaysAndTime || existingAvailibilityData.availableDaysAndTime,
      isBikeRental: isBikeRental || existingAvailibilityData.isBikeRental,
      bikeRentalDetails: bikeRentalDetails || existingAvailibilityData.bikeRentalDetails,
    };
    editAvailibilityObj.isBikeRental = isBikeRental;
    /* if ((editAvailibilityObj.whatsIncludes[0].key === 'Lunch' && editAvailibilityObj.whatsIncludes[0].checked === false)
      && (editAvailibilityObj.whatsIncludes[1].key === 'Dinner' && editAvailibilityObj.whatsIncludes[1].checked === false)
      && (editAvailibilityObj.whatsIncludes[2].key === 'Water' && editAvailibilityObj.whatsIncludes[2].checked === false)
      && (editAvailibilityObj.whatsIncludes[3].key === 'Snacks' && editAvailibilityObj.whatsIncludes[3].checked === false)
      && (editAvailibilityObj.whatsIncludes[4].key === 'Hotel Pickup & Dropoff' && editAvailibilityObj.whatsIncludes[4].checked === false)
      && (editAvailibilityObj.whatsIncludes[5].key === 'Beer (for those 21 and older)' && editAvailibilityObj.whatsIncludes[5].checked === false)
      && (editAvailibilityObj.whatsIncludes[6].key === 'Nothing' && editAvailibilityObj.whatsIncludes[6].checked === false)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_WHAT_INCLUDES);
    } */
    const isFalse = element => element.checked === false;
    if (editAvailibilityObj.languages.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_LANGUAGE);
    }
    if (editAvailibilityObj.rideCategory.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_RIDE_CATEGORY);
    }
    await Availabilities.findByIdAndUpdate(
      existingAvailibilityData.id, editAvailibilityObj,
    );
    const response = await Availabilities.findById(req.body.tourAvailabilityId)
      .populate({
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
    await UserActivities.create({ user: req.user.userId, activity: 'Edited Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getAllToursAvailability = async (req, res) => {
  try {
    const skip = parseInt(req.query.skip || 0, 10);
    const limit = parseInt(req.query.limit || 10, 10);
    const userData = await Users.findById(req.user.userId);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      availableDaysAndTime: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      dateCreate: 1,
      blockedDates: 1,
      isPriority: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    };
    const response = await Availabilities.find({ user: userData.id, isActive: true })
      .populate({
        path: 'user',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          profilePic: 1,
          isAvailabilitySet: 1,
        },
      }).sort({ dateCreate: -1 }).skip(skip)
      .limit(limit)
      .select(selectObject);
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getToursAvailabilities = async (req, res) => {
  try {
    // const skip = parseInt(req.query.skip || 0, 10);
    // const limit = parseInt(req.query.limit || 10, 10);
    const userData = await Users.findById(req.body.user);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      dateCreate: 1,
      blockedDates: 1,
      isPriority: 1,
      availableDaysAndTime: 1,
      bikeRentalDetails: 1,
      isBikeRental: 1,
    };
    const response = await Availabilities.find({ user: userData.id, isActive: true })
      .populate({
        path: 'user',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          profilePic: 1,
          currentLoggedInDeviceId: 1,
          isAvailabilitySet: 1,
        },
      }).sort({ dateCreate: -1 })
      .select(selectObject);
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getTourGuideProfile = async (req, res) => {
  try {
    const selectObjectTourGuide = {
      firstName: 1,
      lastName: 1,
      bio: 1,
      email: 1,
      profilePic: 1,
      tourSkills: 1,
      tourExperience: 1,
      tourDocument: 1,
      tourTripLocation: 1,
      highLights: 1,
      availableGuru: 1,
      dateOfBirth: 1,
      contactNumber: 1,
      roleCode: 1,
      height: 1,
      gender: 1,
      purpose: 1,
      interestedIn: 1,
      availableFor: 1,
      lastLogin: 1,
      address: 1,
      currentLoggedInDeviceId: 1,
      isAvailabilitySet: 1,
      discount: 1,
      serviceOffered: 1,
      city: 1,
    };
    const selectObjectAvailibility = {
      user: 1,
      tourName: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      availabilityType: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      dateUpdate: 1,
      blockedDates: 1,
      availableDaysAndTime: 1,
      isPriority: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    };
    const userData = await Users.findById(req.body.user).select(selectObjectTourGuide);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const data = await Availabilities.find({ user: userData.id, isActive: true })
      .populate({
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
      }).sort({ isPriority: -1, dateCreate: -1 }).limit(5)
      .select(selectObjectAvailibility);
    /* if (data.length === 0) {
      data = await Availabilities.find({ user: userData.id, isActive: true })
        .populate({
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
        }).sort({ dateCreate: -1 }).limit(5)
        .select(selectObjectAvailibility);
    } */
    const response = { userData, tourAvaibilityData: data };
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

// Business profile

export const addBusinessTourAvailability = async (req, res) => {
  try {
    let createAvailibilityObj = {};
    let selectObject = {};
    if (req.user.roleCode !== ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    if (req.user.businessType !== 'Bike Shop' && req.user.businessType !== 'Tour Company'
    && req.user.businessType !== 'Bike Services' && req.user.businessType !== 'Hotels & Lodging') {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    /* if (!req.user.isMerchantAccount && !req.user.paypalEmail) {
      throw new Error(ERROR_MESSAGE.MERCHANT_ACCOUNT_AND_PAYPALEMAIL_NOT_FOUND);
    } */
    const {
      tourName, placeId, locationName, aboutlocation, price, blockedDates, availableDaysAndTime,
      meetingPlace, tourSkills, rideCategory, tourMaxBooking, languages, isPriority,
      whatsIncludes, itinerary, availableDates, tourTime, highLights, tourDiscount,
      bikeRentalDetails, isBikeRental,
    } = req.body;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
    const locationData = await axios.get(url);
    const latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
    const longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
    const isFalse = element => element.checked === false;
    if (languages.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_LANGUAGE);
    }
    if (rideCategory.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_RIDE_CATEGORY);
    }
    selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      isActive: 1,
      isPriority: 1,
      blockedDates: 1,
      latitude: 1,
      longitude: 1,
      availableDaysAndTime: 1,
      bikeRentalDetails: 1,
      isBikeRental: 1,
    };
    createAvailibilityObj = {
      user: req.user.userId,
      availabilityType: AVAILABILITYTYPE.BUSINESS,
      tourName,
      placeId,
      locationName,
      aboutlocation,
      price,
      meetingPlace,
      tourSkills,
      rideCategory,
      tourMaxBooking,
      languages,
      whatsIncludes,
      itinerary,
      availableDates,
      tourTime,
      highLights,
      tourDiscount,
      blockedDates,
      isActive: true,
      isPriority: isPriority || false,
      latitude,
      longitude,
      availableDaysAndTime,
      bikeRentalDetails,
      isBikeRental,
    };
    const availability = await Availabilities.create(createAvailibilityObj);
    if (availability && !req.user.isAvailabilitySet) {
      await Users.findByIdAndUpdate(req.user.userId, { isAvailabilitySet: true });
    }
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
    await UserActivities.create({ user: req.user.userId, activity: 'Added Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const editBusinessTourAvailability = async (req, res) => {
  try {
    let editAvailibilityObj = {};
    let selectObject = {};
    const existingAvailibilityData = await Availabilities.findOne({
      availabilityType: AVAILABILITYTYPE.BUSINESS,
      _id: req.body.tourAvailabilityId,
      isActive: true,
    });
    if (!existingAvailibilityData) {
      throw new Error(ERROR_MESSAGE.TOUR_AVAILABILITY_NOT_FOUND);
    }
    if (req.user.roleCode !== ROLE_CODE.BUSINESS) {
      throw new Error(ERROR_MESSAGE.PERMISSON_DENIED);
    }
    const {
      tourName, bikeRentalDetails, languages, aboutlocation, price, itinerary, availableDaysAndTime,
      meetingPlace, tourTime, rideCategory, tourMaxBooking, locationName, isPriority, isBikeRental,
      placeId, whatsIncludes, blockedDates, availableDates, tourSkills, highLights, tourDiscount,
    } = req.body;
    let latitude;
    let longitude;
    if (placeId) {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${process.env.GOOGLE_API_KEY}`;
      const locationData = await axios.get(url);
      latitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lat));
      longitude = JSON.parse(JSON.stringify(locationData.data.result.geometry.location.lng));
    }
    selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      isActive: 1,
      isPriority: 1,
      blockedDates: 1,
      latitude: 1,
      longitude: 1,
      availableDaysAndTime: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
    };
    editAvailibilityObj = {
      tourName: tourName || existingAvailibilityData.tourName,
      placeId: placeId || existingAvailibilityData.placeId,
      locationName: locationName || existingAvailibilityData.locationName,
      aboutlocation: aboutlocation || existingAvailibilityData.aboutlocation,
      price: price || existingAvailibilityData.price,
      meetingPlace: meetingPlace || existingAvailibilityData,
      tourSkills: tourSkills || existingAvailibilityData.tourSkills,
      rideCategory: rideCategory || existingAvailibilityData.rideCategory,
      tourMaxBooking: tourMaxBooking || existingAvailibilityData.tourMaxBooking,
      languages: languages || existingAvailibilityData.languages,
      whatsIncludes: whatsIncludes || existingAvailibilityData.whatsIncludes,
      itinerary: itinerary || existingAvailibilityData.itinerary,
      availableDates: availableDates || existingAvailibilityData.availableDates,
      tourTime: tourTime || existingAvailibilityData.tourTime,
      highLights: highLights || existingAvailibilityData.highLights,
      tourDiscount: tourDiscount || existingAvailibilityData.tourDiscount,
      isPriority: isPriority || existingAvailibilityData.isPriority,
      blockedDates: blockedDates || existingAvailibilityData.blockedDates,
      latitude: latitude || existingAvailibilityData.latitude,
      longitude: longitude || existingAvailibilityData.longitude,
      availableDaysAndTime: availableDaysAndTime || existingAvailibilityData.availableDaysAndTime,
      isBikeRental: isBikeRental || existingAvailibilityData.isBikeRental,
      bikeRentalDetails: bikeRentalDetails || existingAvailibilityData.bikeRentalDetails,
    };
    editAvailibilityObj.isBikeRental = isBikeRental;
    const isFalse = element => element.checked === false;
    if (editAvailibilityObj.languages.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_LANGUAGE);
    }
    if (editAvailibilityObj.rideCategory.every(isFalse)) {
      throw new Error(ERROR_MESSAGE.PLEASE_SELECT_RIDE_CATEGORY);
    }
    await Availabilities.findByIdAndUpdate(
      existingAvailibilityData.id, editAvailibilityObj,
    );
    const response = await Availabilities.findById(req.body.tourAvailabilityId)
      .populate({
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
    await UserActivities.create({ user: req.user.userId, activity: 'Edited Availability' });
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getAllBusinessToursAvailability = async (req, res) => {
  try {
    const skip = parseInt(req.query.skip || 0, 10);
    const limit = parseInt(req.query.limit || 10, 10);
    const userData = await Users.findById(req.user.userId);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      isActive: 1,
      dateCreate: 1,
      blockedDates: 1,
      isPriority: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
      availableDaysAndTime: 1,
    };
    const response = await Availabilities.find({ user: userData.id, isActive: true })
      .populate({
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
      }).sort({ dateCreate: -1 }).skip(skip)
      .limit(limit)
      .select(selectObject);
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getBusinessToursAvailabilities = async (req, res) => {
  try {
    // const skip = parseInt(req.query.skip || 0, 10);
    // const limit = parseInt(req.query.limit || 10, 10);
    const userData = await Users.findById(req.body.user);
    if (!userData) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const selectObject = {
      user: 1,
      tourName: 1,
      availabilityType: 1,
      placeId: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      isActive: 1,
      dateCreate: 1,
      blockedDates: 1,
      isPriority: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
      availableDaysAndTime: 1,
    };
    const response = await Availabilities.find({ user: userData.id, isActive: true })
      .populate({
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
      }).sort({ dateCreate: -1 })
      .select(selectObject);
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getBusinessTourGuideProfile = async (req, res) => {
  try {
    /* const selectObjectTourGuide = {
      firstName: 1,
      lastName: 1,
      bio: 1,
      email: 1,
      profilePic: 1,
      businessType: 1,
      businessName: 1,
      businessEmail: 1,
      webURL: 1,
      numberOfEMP: 1,
      taxNumber: 1,
      aboutBusiness: 1,
      businessAddress: 1,
      startDay: 1,
      endDay: 1,
      startTime: 1,
      endTime: 1,
      highLights: 1,
      availableGuru: 1,
      dateOfBirth: 1,
      contactNumber: 1,
      roleCode: 1,
      height: 1,
      gender: 1,
      purpose: 1,
      interestedIn: 1,
      availableFor: 1,
      lastLogin: 1,
      address: 1,
      currentLoggedInDeviceId: 1,
      isAvailabilitySet: 1,
      discount: 1,
      serviceOffered: 1,
      city: 1,
    }; */
    const selectObjectAvailibility = {
      user: 1,
      tourName: 1,
      placeId: 1,
      availabilityType: 1,
      locationName: 1,
      aboutlocation: 1,
      price: 1,
      meetingPlace: 1,
      tourSkills: 1,
      rideCategory: 1,
      tourMaxBooking: 1,
      languages: 1,
      whatsIncludes: 1,
      itinerary: 1,
      availableDates: 1,
      tourTime: 1,
      highLights: 1,
      tourDiscount: 1,
      dateUpdate: 1,
      blockedDates: 1,
      isPriority: 1,
      isBikeRental: 1,
      bikeRentalDetails: 1,
      availableDaysAndTime: 1,
    };
    const user = await Users.findById(req.body.user);
    if (!user) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }
    const locations = await Locations.find({ user: user.id });
    const userData = { ...user.toObject() };
    userData.businessLocations = locations;
    const data = await Availabilities.find({ user: user.id, isActive: true })
      .populate({
        path: 'user',
        select: {
          _id: 1,
          firstName: 1,
          lastName: 1,
          email: 1,
          profilePic: 1,
          businessName: 1,
          roleCode: 1,
          currentLoggedInDeviceId: 1,
          isAvailabilitySet: 1,
        },
      }).sort({ isPriority: -1, dateCreate: -1 }).limit(5)
      .select(selectObjectAvailibility);
    /* if (data.length === 0) {
      data = await Availabilities.find({ user: userData.id, isActive: true })
        .populate({
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
        }).sort({ dateCreate: -1 }).limit(5)
        .select(selectObjectAvailibility);
    } */
    const response = { userData, BusinessTourAvaibilityData: data };
    return successResponse(req, res, response);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getAvailabilityById = async (req, res) => {
  try {
    const tour = await Availabilities.findOne({ _id: req.body.tourId, isActive: true })
      .populate({
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
    if (!tour) {
      throw new Error(ERROR_MESSAGE.AVAILABILITY_NOT_FOUND);
    }
    return successResponse(req, res, tour);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
