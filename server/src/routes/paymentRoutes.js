const express = require('express')
const router = express.Router();

const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'rzp_test_abT4ZDhDnaQg8g',
  key_secret: 'bqnLFUibrgnHgCOOJiVBzWKp',
});

router.post('/create-payment/:amount', async (req, res) => {
  const orderAmount = req.params.amount;
  const options = {
    amount: orderAmount * 100, // Amount in paise (1 INR = 100 paise)
    currency: 'INR',
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;