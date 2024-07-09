export default class PaymentProcessor {
    static processCreditCard(amount) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Payment of $${amount} via Credit Card processed successfully.`);
            }, 1000);
        });
    }

    static processCash(amount) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Payment of $${amount} via Cash processed successfully.`);
            }, 1000);
        });
    }
}

 