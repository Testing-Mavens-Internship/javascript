
export class PaymentProcessor {
    static async processCreditCard(amount) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`Payment of $${amount.toFixed(2)} via Credit Card processed successfully.`);
        }, 1000);
      });
    }
  
    static async processCash(amount) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`Payment of $${amount.toFixed(2)} via Cash processed successfully.`);
        }, 1000);
      });
    }
  }
  

  