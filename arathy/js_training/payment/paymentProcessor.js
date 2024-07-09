class PaymentProcessor {
    static processCreditCard(amount) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Payment of $${amount.toFixed(2)} via Credit Card processed successfully.`);
            }, 1000);
        });
    }

    static processCash(amount) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Payment of $${amount.toFixed(2)} via Cash processed successfully.`);
            }, 1000);
        });
    }
}

export default PaymentProcessor;