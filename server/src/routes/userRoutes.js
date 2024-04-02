const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const { verifyUser } = require('../middlewares/authenticationMiddleware');

// User Routes
router.get('/', verifyUser, userControllers.getUserInfo);
// router.get('/get-profile/:userId', verifyUser, UserController.getUserProfile);

// User Authentication
router.post('/login-otp', userControllers.loginOTP);
router.post('/verify-otp', userControllers.verifyOTP);

router.get('/ticket-price', userControllers.ticketPrice);



module.exports = router;
