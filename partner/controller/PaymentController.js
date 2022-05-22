require('dotenv').config();
var {book, schedule} = require('../configDb');

const stripe = require("stripe")("sk_test_51KZccWHODmKkGzOlyJqFOoP6ncck8bhkklMe3R2MZMBILvXmRYZNfbJ0CBnKBpiyH849s0XbSfAbxwrC2ZbVqqAO00tQAQCRaS");
class PaymentController{
    async index(req, res) {
        try {
            
            // const charge = await stripe.charges.create({
            //     amount: 200000,
            //     currency: 'vnd',
            //     source: 'tok_amex',
            //     // billing:{
            //     //     "email": "qtthien4@gmai.com",
            //     //     "phone": "+84 0915313964"
            //     // },
            //     description: 'qtthien4@gmai.com' ,
            //   });
            //   console.log(charge)


            //set so tien             
            const amount = 200000;
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'vnd',
                payment_method_types: ['card'],
                customer:'cus_LiquaVi5nMSruX',
                description: 'qtthien4@gmai.com'            
            });
            const clientSecret = paymentIntent.client_secret;
            console.log(paymentIntent)            
            res.json({clientSecret, message: 'Payment initiated successfully!'})
        } catch (error) {
            console.log(error);
            res.json(500).json({message : 'Internal server error'})
        }
    }

    CheckPayment(req,res){
        console.log(req.body)
        var updateBooking = req.body
        if(updateBooking.sttBooking == "success"){
            var idbooking = updateBooking.idBooking
            var bookingTime = updateBooking.bookingTime
            var idVoucher = updateBooking.idVoucher
            var idGift = updateBooking.idGift
            var reduce = updateBooking.reduce.toString()
            var idPayment = updateBooking.idPayment

            book.update({
                IdVoucher: idVoucher,
                IdGift: idGift,
                BookingTime: bookingTime,
                Reduce: reduce,
                SttBooking: updateBooking.sttBooking,
                IdPayment: idPayment,
            },{where : {IdBooking: idbooking}})
            //update theem cai soo luong da them
            //update điểm
        }
        
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