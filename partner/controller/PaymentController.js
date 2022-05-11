require('dotenv').config();

const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

class PaymentController{
    async index(req, res) {
        try {
            //set so tien 
            // const {product} = req.body
            console.log(req.body);
            // const amount = product.amount
            // const paymentIntent = await stripe.paymentIntent.create({
            //     amount,
            //     currency: 'vnd',
            //     payment_method_types: ['card'],
            //     metadata: {
            //         name: 'value'
            //     }
            // });
            // const clientSecret = paymentIntent.client_secret;
            // res.json({clientSecret, message: 'Payment initiated successfully!'})
        } catch (error) {
            console.log(error);
            res.json(500).json({message : 'Internal server error'})
        }
    }
}

module.exports = new PaymentController