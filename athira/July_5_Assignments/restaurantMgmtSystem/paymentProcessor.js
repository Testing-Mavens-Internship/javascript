class PaymentProcessor {
    static async processCreditCard(amount) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Payment of $${amount} via Credit Card processed successfully.`);
            }, 1000);
        });
    }

    static async processCash(amount) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Payment of $${amount} via Cash processed successfully.`);
            }, 1000);
        });
    }

    static async processPayment(amount, method) {
        if (method === 'credit card') {
            return this.processCreditCard(amount);
        } else if (method === 'cash') {
            return this.processCash(amount);
        } else {
            throw new Error('Unsupported payment method');
        }
    }
}

export default PaymentProcessor;
