require('dotenv').config();

const stripe = require("stripe")("sk_test_51KZccWHODmKkGzOlyJqFOoP6ncck8bhkklMe3R2MZMBILvXmRYZNfbJ0CBnKBpiyH849s0XbSfAbxwrC2ZbVqqAO00tQAQCRaS");
class PaymentController{
    async index(req, res) {
        try {
            //set so tien 
            const {product} = req.body
            console.log(req.body);
            const amount = 200000
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'vnd',
                payment_method_types: ['card'],
                metadata: {
                    name: 'value'
                }
            });
            const clientSecret = paymentIntent.client_secret;
            res.json({clientSecret, message: 'Payment initiated successfully!'})
        } catch (error) {
            console.log(error);
            res.json(500).json({message : 'Internal server error'})
        }
    }
}

module.exports = new PaymentController