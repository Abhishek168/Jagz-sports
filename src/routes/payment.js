import express from 'express';
import validate from 'express-validation';

import * as paymentController from '../controllers/Payment/payment.controller';
import * as paymentValidator from '../controllers/Payment/payment.validator';

const router = express.Router();

router.post(
  '/createMerchantAccount',
  validate(paymentValidator.createMerchantAccount),
  paymentController.createMerchantAccount,
);

router.put(
  '/updateMerchantAccount',
  validate(paymentValidator.createMerchantAccount),
  paymentController.updateMerchantAccount,
);

router.get(
  '/generateToken',
  paymentController.generateToken,
);

router.get(
  '/getPaymentMethod',
  paymentController.getPaymentMethod,
);

router.post(
  '/createPaymentMethod',
  validate(paymentValidator.createPaymentMethod),
  paymentController.createPaymentMethod,
);

router.delete(
  '/deletePaymentMethod',
  validate(paymentValidator.deletePaymentMethod),
  paymentController.deletePaymentMethod,
);

router.post(
  '/defaultPaymentMethod',
  validate(paymentValidator.deletePaymentMethod),
  paymentController.defaultPaymentMethod,
);

router.get(
  '/findTransactionsByUserId',
  paymentController.findTransactionsByUserId,
);

router.post(
  '/createTransactionIndividual',
  validate(paymentValidator.createTransactionIndividual),
  paymentController.createTransactionIndividual,
);

router.post(
  '/createTransactionBusiness',
  validate(paymentValidator.createTransactionIndividual),
  paymentController.createTransactionBusiness,
);

router.post(
  '/createTransactionTourGuide',
  validate(paymentValidator.createTransactionTourGuide),
  paymentController.createTransactionTourGuide,
);

router.post(
  '/addTourGuidePaymentToken',
  validate(paymentValidator.addTourGuidePaymentToken),
  paymentController.addTourGuidePaymentToken,
);

module.exports = router;
