import braintree from 'braintree';
import Users from '../models/Users';
import sendEmail from './sendEmail';
import temp from './newTemplate';

// constants
import { ERROR_MESSAGE } from './constants';


export default class Braintree {
  constructor({
    merchantId, publicKey, privateKey, masterMerchantAccountId,
  }) {
    this.publicKey = publicKey;
    this.masterMerchantAccountId = masterMerchantAccountId;
    this.merchantId = merchantId;
    this.gateway = braintree.connect({
      environment: braintree.Environment.Sandbox,
      merchantId,
      publicKey,
      privateKey,
    });
    console.log('Braintree started');
  }

  // find
  async findCustomer(customerId) {
    return new Promise((res, rej) => this.gateway.customer.find(`${customerId}`, (error, customer) => {
      if (error) {
        rej(error);
      }
      if (customer) {
        res(customer);
      }
    })).catch(async () => {
      const user = await Users.findById(customerId);
      const customer = await this.createCustomerId(
        `${user.id}`,
        user.firstName,
        user.lastName,
        user.email,
      );
      return customer;
    });
  }

  async findMerchant(merchantId) {
    return new Promise((res, rej) => this.gateway.merchantAccount.find(`${merchantId}`, (error, merchant) => {
      if (error) {
        rej(error);
      }
      if (merchant) {
        res(merchant);
      }
    })).catch(async (error) => {
      if (error.name === 'notFoundError' && error.type === 'notFoundError') {
        return {};
      }
      throw new Error(ERROR_MESSAGE.METCHANT_ACCOUNT_NOT_FOUND);
    });
  }

  // generate token
  async generateToken() {
    return new Promise((res, rej) => this.gateway.clientToken.generate({}, (error, response) => {
      if (error) {
        console.log(`token error${error}`);
        rej(error);
      }
      if (response) {
        console.log(`token generated${response}`);
        res(response.clientToken);
      }
    }));
  }

  // generate customer token
  async generateCustomerToken(customerId) {
    return new Promise((res, rej) => this.gateway.clientToken.generate(
      {
        customerId: `${customerId}`,
      },
      (error, response) => {
        if (error) {
          console.log(`Customer token error${error}`);
          rej(error);
        }
        if (response) {
          console.log(`Customer token generated${response}`);
          res(response.clientToken);
        }
      },
    ));
  }

  // generate merchant token
  async generateMerchantToken(merchantAccountId) {
    return new Promise((res, rej) => this.gateway.clientToken.generate(
      {
        merchantAccountId: `${merchantAccountId}`,
      },
      (error, response) => {
        if (error) {
          console.log(`Merchant token error${error}`);
          rej(error);
        }
        if (response) {
          console.log(`Merchant token generated${response}`);
          res(response.clientToken);
        }
      },
    ));
  }
  // end generate token

  // create account (customer/merchant)
  // customer
  async createCustomerId(userId, firstName, lastName, email) {
    return new Promise((res, rej) => this.gateway.customer.create(
      {
        id: `${userId}`,
        firstName,
        lastName,
        email,
      },
      (error, result) => {
        console.log(`Customer ID error${error}`);
        if (error) {
          rej(error);
        }
        console.log(`Customer ID generated${result}`);
        if (result.success) {
          res(result.customer);
        }
      },
    ));
  }

  // merchant account
  async createMerchantAccount(id, individual, business, funding, destination, tosAccepted) {
    return new Promise((res, rej) => this.gateway.merchantAccount.create(
      {
        individual,
        business: (business || null),
        funding: {
          ...funding,
          destination: braintree.MerchantAccount.FundingDestination[destination],
        },
        tosAccepted,
        id: `${id}`,
        masterMerchantAccountId: this.masterMerchantAccountId,
      },
      (error, result) => {
        if (error) {
          console.log('1error', error);
          rej(error);
        }
        console.log('result', result);
        res(result);
      },
    )).catch(async (error) => {
      throw error;
    });
  }

  async updateMerchantAccount(id, individual, business, funding, destination, tosAccepted) {
    await this.findMerchant(id);
    return new Promise((res, rej) => this.gateway.merchantAccount.update(
      `${id}`,
      {
        individual,
        business,
        funding: {
          ...funding,
          destination: braintree.MerchantAccount.FundingDestination[destination],
        },
        tosAccepted,
      },
      (error, result) => {
        if (error) {
          console.log('error', error);
          rej(error);
        }
        console.log('result', result);
        res(result);
      },
    )).catch(async (error) => {
      throw error;
    });
  }

  // end create account
  // get payment method
  async getPaymentMethodsByCustomerId(customerId) {
    const customer = await this.findCustomer(customerId);
    return customer.paymentMethods;
  }

  async getPaymentMethodsByMerchantId(merchantId) {
    const merchant = await this.findMerchant(merchantId);
    return merchant;
  }

  async getPaymentMethodByToken(paymentMethodToken) {
    return new Promise((res, rej) => this.gateway.paymentMethod.find(`${paymentMethodToken}`, (error, paymentMethod) => {
      if (error) {
        rej(error);
      }
      res(paymentMethod);
    })).catch((error) => {
      throw error;
    });
  }
  // end get payment method

  // payment method
  // payment method
  async createPaymentMethod(customerId, paymentMethodNonce) {
    // console.log('methodType>>>', methodType);
    console.log(`Customer ID${customerId}\npaymentMethodNonce${paymentMethodNonce}`);

    const paymentObj = {
      customerId: `${customerId}`,
      paymentMethodNonce: `${paymentMethodNonce}`,
      options: {
        verifyCard: true,
        makeDefault: true,
        failOnDuplicatePaymentMethod: true,
      },
    };
    return new Promise((res, rej) => this.gateway.paymentMethod.create(
      paymentObj,
      async (error, result) => {
        if (error) {
          console.log(`payment creation error\n${JSON.stringify(error)}`);
          rej(error);
        }
        console.log(`payment creation successfully\n${JSON.stringify(result)}`);
        res(result);
      },
    ));
  }

  async deletePaymentMethod(token) {
    return new Promise((res, rej) => this.gateway.paymentMethod.delete(`${token}`, (error, result) => {
      if (error) {
        console.log('deletePaymentMethod error', error);
        rej(error);
      }
      console.log('deletePaymentMethod result', result);
      res(result);
    })).catch(async (error) => {
      throw error;
    });
  }

  async defaultPaymentMethod(token) {
    const clientMethod = await this.getPaymentMethodByToken(token);
    console.log(`clientMethodclientMethod\n, ${JSON.stringify(clientMethod)}`);
    return new Promise((res, rej) => this.gateway.paymentMethod.update(
      `${token}`,
      {
        options: {
          verifyCard: true,
          // failOnDuplicatePaymentMethod: true,
          makeDefault: true,
        },
      },
      (error, result) => {
        if (error) {
          rej(error);
        }
        if (result && result.success) {
          res(result);
        } else {
          rej(result);
        }
      },
    )).catch(async (error) => {
      throw error;
    });
  }
  // end payment method

  // create transaction
  async createTransaction(amount, merchantAccountId, guru, paymentMethodToken, paymentMethodNonce = '') {
    let amt = amount;
    amt /= 1.15;
    let serviceFeeAmount = amt * guru.serviceFeeAmount;
    serviceFeeAmount /= 100;
    console.log('typeof>>', typeof guru.paypalEmail);
    if (!guru.paypalEmail) {
      console.log('>>>>true');
      await this.findMerchant(merchantAccountId);
    }
    let isMerchant;
    try {
      isMerchant = await this.findMerchant(merchantAccountId);
      console.log('isMerchant', isMerchant);
    } catch (err) {
      console.log(err);
    }
    console.log('111>>>>>>', isMerchant);
    const clientMethod = await this.getPaymentMethodByToken(paymentMethodToken);
    console.log(process.env.MERCHANTACCOUNTID, paymentMethodToken);
    if (clientMethod && clientMethod.imageUrl && clientMethod.imageUrl.indexOf('paypal') >= 0) {
      return new Promise((res, rej) => this.gateway.transaction.sale(
        {
          amount: amount.toFixed(2),
          paymentMethodToken: `${paymentMethodToken}`,
          merchantAccountId: process.env.MERCHANTACCOUNTID,
          options: {
            submitForSettlement: true,
          },
        },
        (error, result) => {
          console.log('paypal error', error, paymentMethodNonce);
          console.log('paypal result', result);
          if (error) {
            rej(error);
          } else if (result.success) {
            guru.mailDetails.serviceFeeAmount = serviceFeeAmount.toFixed(2);
            sendEmail(process.env.EMAIL, 'Payment Details', temp.paymentNotifyMasterMerchant(guru.mailDetails));
            res(result.transaction);
          } else {
            rej(result);
          }
        },
      )).catch((error) => {
        throw error;
      });
    }

    const transactionObj = {
      amount: amount.toFixed(2),
      paymentMethodToken: `${paymentMethodToken}`,
    };
    let updatedTransactionObj;
    console.log('>>>>>', merchantAccountId);
    console.log(!merchantAccountId);
    console.log(guru.paypalEmail);
    console.log(!merchantAccountId && guru.paypalEmail);
    if ((!guru.isMerchantAccount && guru.paypalEmail)
       || (guru.defaultPayout === 'paypal' && guru.paypalEmail)) {
      console.log('true');
      updatedTransactionObj = {
        ...transactionObj,
        merchantAccountId: process.env.MERCHANTACCOUNTID,
        options: {
          submitForSettlement: true,
        },
      };
    } else {
      console.log('false');
      updatedTransactionObj = {
        ...transactionObj,
        serviceFeeAmount: serviceFeeAmount.toFixed(2),
        merchantAccountId: `${merchantAccountId}`,
        options: {
          holdInEscrow: true,
          submitForSettlement: true,
        },
      };
    }
    console.log('>>>>>>>>', updatedTransactionObj);
    return new Promise((res, rej) => this.gateway.transaction.sale(
      updatedTransactionObj,
      (error, result) => {
        console.log('>>>>', error);
        if (error) {
          rej(error);
        } else if (result.success) {
          console.log('>>>>>>>>>>>', result);
          console.log('>>>>', result);
          res(result.transaction);
        } else {
          rej(result);
        }
      },
    )).catch((error) => {
      throw error;
    });
  }
}
