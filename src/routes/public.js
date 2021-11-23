import express from 'express';
import validate from 'express-validation';
import multer from 'multer';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const upload = multer();
// const uploads = upload.fields([{ name: 'profilePic', maxCount: 10 }]);
// const uploadFile = upload.single('profilePic');
const uploads = upload.fields([{ name: 'file', maxCount: 10 }]);

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.get(
  '/getUsers',
  userController.getUsers,
);

router.get(
  '/getRidePreferences',
  userController.getRidePreferences,
);

router.get(
  '/getCountries',
  userController.getCountries,
);

router.get(
  '/getStates/:id',
  userController.getStates,
);

router.get(
  '/getCities/:id',
  userController.getCities,
);

router.get(
  '/checkUser/:email',
  userController.checkUser,
);

router.post(
  '/checkAppleUser',
  userController.checkAppleUser,
);

router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);

router.post(
  '/resetPassword',
  validate(userValidator.resetPassword),
  userController.resetPassword,
);

router.post(
  '/sendOtp',
  validate(userValidator.sendOtp),
  userController.sendOtp,
);

router.post(
  '/uploadFiles',
  uploads,
  userController.uploadFiles,
);

router.post(
  '/register',
  validate(userValidator.register),
  userController.register,
);

router.post(
  '/admin/login',
  validate(userValidator.adminLogin),
  userController.adminLogin,
);

router.post(
  '/host/register',
  validate(userValidator.register),
  userController.individualHostRegister,
);

router.post(
  '/becomeHost',
  validate(userValidator.becomeHost),
  userController.becomeHost,
);

router.get(
  '/getDocs',
  userController.getDocs,
);

router.get(
  '/getUpdate',
  userController.updateDB,
);

router.get(
  '/getCheckboxValues',
  userController.getCheckboxValues,
);

router.post(
  '/oldUser',
  userController.oldUser,
);

module.exports = router;
