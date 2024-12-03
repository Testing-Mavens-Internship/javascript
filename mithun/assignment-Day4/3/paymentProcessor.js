// paymentProcessor.js
class PaymentProcessor {
    static async processCreditCard(amount) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Payment of $${amount} via Credit Card processed successfully.`);
        }, 1000);
      });
    }
  
    static async processCash(amount) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Payment of $${amount} via Cash processed successfully.`);
        }, 1000);
      });
    }
  }
  
  export default PaymentProcessor;
  