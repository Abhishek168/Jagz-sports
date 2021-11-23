import * as cron from 'node-cron';
import { createTransaction, emailReminder, chatSummaryReminder } from '../controllers/Payment/payment.controller';

cron.schedule('0 10 * * *', () => {
  console.log('cron-job running for payment :::::::');
  createTransaction();
});

cron.schedule('30 23 * * *', () => {
  console.log('cron-job running for email reminder :::::::');
  emailReminder();
});

cron.schedule('30 22 * * *', () => {
  console.log('cron-job running for chat summary :::::::');
  chatSummaryReminder();
});
