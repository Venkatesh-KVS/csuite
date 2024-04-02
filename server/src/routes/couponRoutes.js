const express = require('express');
const router = express.Router();
const { verifyCoupon, getAllCouponCodes } = require('../controllers/couponControllers')

router.get('/', getAllCouponCodes)
router.get('/verify-coupon/:code', verifyCoupon);

module.exports = router