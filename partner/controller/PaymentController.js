require('dotenv').config();

const stripe = require("stripe")("sk_test_51KZccWHODmKkGzOlyJqFOoP6ncck8bhkklMe3R2MZMBILvXmRYZNfbJ0CBnKBpiyH849s0XbSfAbxwrC2ZbVqqAO00tQAQCRaS");
class PaymentController{
    async index(req, res) {
        try {
            //set so tien 
            console.log(req.body)
            const amount = 200000
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'vnd',
                payment_method_types: ['card'],
                //dat description thanh ten nguoi gui
                             
            });
            const clientSecret = paymentIntent.client_secret;
            console.log(paymentIntent)
            // if(clientSecret != ''){

            // }
            res.json({clientSecret, message: 'Payment initiated successfully!'})
        } catch (error) {
            console.log(error);
            res.json(500).json({message : 'Internal server error'})
        }
    }

    CheckPayment(req,res){
        console.log(req.body)
        i
    }

    async refundPayment(req,res){
        try {
            const refund = await stripe.refunds.create({
                payment_intent: 'pi_3KyYKfHODmKkGzOl1PIoACRz',
                amount: 200000
              });
              console.log(refund);
            res.json({ message: 'Refund payment is successfully!'})
        } catch (error) {
            console.log(error)
            res.json(500).json({message : 'Internal server error'})
        }
    }
}

module.exports = new PaymentController