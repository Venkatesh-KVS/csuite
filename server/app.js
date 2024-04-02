require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const axios = require('axios');


const port = process.env.PORT;
const privateKey = process.env.TOKEN_SECRET_KEY;
const salt = 10;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(cors({
    origin: ["http://localhost:3124"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true
}));

// ------------------------------------------------------------
const { sendOTP } = require('./src/utils/sendOTP');

const userRoutes = require('./src/routes/userRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const couponRoutes = require('./src/routes/couponRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const ticketRoutes = require('./src/routes/ticketRoutes');
app.use('/user', userRoutes);
app.use('/payments', paymentRoutes);
app.use('/coupons', couponRoutes);
app.use('/orders', orderRoutes);
app.use('/ticket', ticketRoutes);


// ------------------------------------------------------------
app.get('/', (req, res) => {
  res.json('Hello! from CSuite Summit Server- #CS_summit');
})

app.post('/send-otp/:number', (req, res) => {
  const { number } = req.params;
  const otp = 123456;
  sendOTP(number, otp);
})

app.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({ Status: "Success" });
})

app.listen(process.env.PORT || 8081, () => {
  console.log("server app running on port: " + port);
})

