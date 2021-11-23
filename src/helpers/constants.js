export const ACCOUNT_TYPE = {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  EMAIL: 'EMAIL',
  APPLE: 'APPLE',
};

export const SERVICE_FREE_AMOUNT = 25;

export const TOURGUIDE_SERVICE_FREE_AMOUNT = 10;

export const INCREMENT = 1;

export const FIRST_BOOKING_POINTS = 20;

export const SIGNUP_POINTS = 5;

export const RADIUS_OF_EARTH = 6371;

export const DEFAULT_PROFILE = 'https://mtbguru.s3.us-east-2.amazonaws.com/gallery/XmjMVyJNOdA5O.png';

export const ROLE_CODE = {
  PEOPLE: 'PEOPLE',
  BUSINESS: 'BUSINESS',
  TOURGUIDE: 'TOURGUIDE',
  ORGANIZATION: 'ORGANIZATION',
  ADMIN: 'ADMIN',
};

export const POLICY_LINKS = {
  TERMS_OF_SERVICE: 'https://mtbguru.s3.us-east-2.amazonaws.com/gallery/zdFhvKMJ9wEF4.html',
  CANCELLATION_POLICY: 'https://mtbguru.s3.us-east-2.amazonaws.com/gallery/LGSJaaXj7oIdX.html',
  FAQ: 'https://mtbguru.s3.us-east-2.amazonaws.com/gallery/tWuicRhIRsJIV.html',
};

export const NOTIFICATION_TYPE = {
  GURU: 'GURU',
  TRAVELLER: 'TRAVELLER',
  TOURGUIDE: 'TOURGUIDE',
};

export const AVAILABILITYTYPE = {
  GURU: 'GURU',
  BUSINESS: 'BUSINESS',
  TOUR: 'TOUR',
};

export const BOOKING_STATUS = {
  NONE: 0,
  REQUESTED: 1,
  ACCEPTED: 2,
  REJECTED: 3,
  PAYMENT_DONE: 4,
  PAYMENT_FAILED: 5,
  CANCELED: 6,
};

export const STATUS_TRANSACTION = {
  SALE: 0,
  REFUND: 1,
  RELEASE: 2,
  PENDING_CANCELED: 3,
  PENDING_PAYMENT: 4,
};

export const PREFERENCES = {
  rideCategory: [
    {
      key: 'Mountain',
      checked: false,
    },
    {
      key: 'Road',
      checked: false,
    },
  ],
  interestedIn: [
    {
      key: 'MTB Ride',
      checked: false,
    },
    {
      key: 'Bicycle Ride',
      checked: false,
    },
  ],
  mtbSpeed: [
    {
      key: 'Crazy Fast',
      checked: false,
    },
    {
      key: 'Steady Pace',
      checked: false,
    },
    {
      key: 'Social',
      checked: false,
    },
    {
      key: 'Slow',
      checked: false,
    },
  ],
  mtbRidePreference: [
    {
      key: 'Cross country',
      checked: false,
    },
    {
      key: 'Technical',
      checked: false,
    },
    {
      key: 'Downhill',
      checked: false,
    },
    {
      key: 'Fat Biking',
      checked: false,
    },
    {
      key: 'All Mountain',
      checked: false,
    },
    {
      key: 'Sufferfest',
      checked: false,
    },
    {
      key: 'E-Bikes',
      checked: false,
    },
  ],
  cyclingSpeed: [
    {
      key: '14 to 16 MPH',
      checked: false,
    },
    {
      key: '17 to 19 MPH',
      checked: false,
    },
    {
      key: '20 to 22 MPH',
      checked: false,
    },
  ],
  cyclingDistance: [
    {
      key: '10 Miles',
      checked: false,
    },
    {
      key: '20 Miles',
      checked: false,
    },
    {
      key: '30 Miles',
      checked: false,
    },
    {
      key: '40 Miles',
      checked: false,
    },
    {
      key: '50 to 100 Miles',
      checked: false,
    },
  ],
  roadRidePreference: [
    {
      key: 'Hilly',
      checked: false,
    },
    {
      key: 'Flat',
      checked: false,
    },
    {
      key: 'Rolling',
      checked: false,
    },
    {
      key: 'Difficult',
      checked: false,
    },
    {
      key: 'Easy',
      checked: false,
    },
    {
      key: 'Moderate',
      checked: false,
    },
  ],
};

export const RIDECATEGORY_DEFAULT = [
  {
    key: 'Mountain Biking',
    checked: false,
  },
  {
    key: 'Road Cycling',
    checked: false,
  },
];

export const AVAILABLE_FOR_DEFAULT = [
  {
    key: 'Individual',
    checked: true,
  },
  {
    key: 'Group Tour',
    checked: false,
  },
];

export const INTERESTEDIN_DEFAULT = [
  {
    key: 'MTB Ride',
    checked: false,
  },
  {
    key: 'Bicycle Ride',
    checked: false,
  },
];

export const MTBSPEED_DEFAULT = [
  {
    key: 'Crazy Fast',
    checked: false,
  },
  {
    key: 'Steady Pace',
    checked: false,
  },
  {
    key: 'Social',
    checked: false,
  },
  {
    key: 'Slow',
    checked: false,
  },
];

export const MTBRIDEPREFERENCE_DEFAULT = [
  {
    key: 'Cross country',
    checked: false,
  },
  {
    key: 'Technical',
    checked: false,
  },
  {
    key: 'Downhill',
    checked: false,
  },
  {
    key: 'Fat Biking',
    checked: false,
  },
  {
    key: 'All Mountain',
    checked: false,
  },
  {
    key: 'Sufferfest',
    checked: false,
  },
  {
    key: 'E-Bikes',
    checked: false,
  },
];

export const CYCLINGSPEED_DEFAULT = [
  {
    key: '14 to 16 MPH',
    checked: false,
  },
  {
    key: '17 to 19 MPH',
    checked: false,
  },
  {
    key: '20 to 22 MPH',
    checked: false,
  },
];

export const CYCLINGDISTANCE_DEFAULT = [
  {
    key: '10 Miles',
    checked: false,
  },
  {
    key: '20 Miles',
    checked: false,
  },
  {
    key: '30 Miles',
    checked: false,
  },
  {
    key: '40 Miles',
    checked: false,
  },
  {
    key: '50 to 100 Miles',
    checked: false,
  },
];

export const ROADRIDEPREFERENCE_DEFAULT = [
  {
    key: 'Hilly',
    checked: false,
  },
  {
    key: 'Flat',
    checked: false,
  },
  {
    key: 'Rolling',
    checked: false,
  },
  {
    key: 'Difficult',
    checked: false,
  },
  {
    key: 'Easy',
    checked: false,
  },
  {
    key: 'Moderate',
    checked: false,
  },
];

export const WHATSINCLUDES = [
  {
    key: 'Lunch',
    checked: false,
  },
  {
    key: 'Dinner',
    checked: false,
  },
  {
    key: 'Water',
    checked: false,
  },
  {
    key: 'Snacks',
    checked: false,
  },
  {
    key: 'Hotel Pickup',
    checked: false,
  },
  {
    key: 'Hotel Dropoff',
    checked: false,
  },
  {
    key: 'Beer (for those 21 and older)',
    checked: false,
  },
];

export const BIKE_SIZE = [
  { value: 'S' },
  { value: 'M' },
  { value: 'L' },
  { value: 'XL' },
];

export const LANG_DEFAULT = [
  { key: 'English', checked: false },
  { key: 'German', checked: false },
  { key: 'Spanish', checked: false },
  { key: 'Dutch', checked: false },
  { key: 'French', checked: false },
];

export const ERROR_MESSAGE = {
  PERMISSON_DENIED: 'permisson denied!',
  GURU_AVAILABILITY_EXISTS: 'Host Availability Already Exists!',
  GURU_AVAILABILITY_NOT_FOUND: 'Host Availability Not Found!',
  TOUR_AVAILABILITY_NOT_FOUND: 'Tour Availability Not Found!',
  AVAILABILITY_NOT_FOUND: 'Availability Not Found!',
  USER_NOT_FOUND: 'User Not Found!',
  BOOKING_NOT_FOUND: 'Booking Not Found!',
  BOOKING_ALREADY_ACCEPTED: 'Booking Already Accepted!',
  BOOKING_ALREADY_REJECTED: 'Booking Already Rejected!',
  BOOKING_NOT_ACCEPETED_YET: 'Booking request is not accepted yet!',
  GURU_NOT_FOUND: 'Host Not Found!',
  MERCHANT_ACCOUNT_OR_PAYPALEMAIL_NOT_FOUND: 'Merchant account and paypal email not found !',
  TOURGUIDE_NOT_FOUND: 'Tour Guide Not Found!',
  MAX_BOOKING_REACHED: 'Tour Has Already Reached Maximum Number Of Bookings On That Date!',
  FROMCOUPON_NOT_FOUND: 'FromCoupon not found',
  UNABLE_TO_DELETE_USER: 'Unable to delete user, Bookings remaining!',
  PLEASE_SELECT_ANOTHER_START_TIME: 'Please select another start time',
  UNABLE_TO_CANCEL_BOOKING: 'Unable to cancel booking',
  BOOKING_CANNOT_BE_CANCELED_WITHIN_48_HOURS_OF_MEETING_TIME: 'Booking cannot be canceled within 48 hours of before meeting.',
  BOOKING_ALREADY_CANCELED: 'You already Canceled the booking',
  PLEASE_SELECT_RIDE_CATEGORY: 'Please select ride category',
  PLEASE_SELECT_WHAT_INCLUDES: 'Please select at least one item in what includes!',
  PLEASE_SELECT_LANGUAGE: 'Please select a language',
};
