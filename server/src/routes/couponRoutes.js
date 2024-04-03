const express = require('express');
const router = express.Router();
const { verifyCoupon, getAllCouponCodes, deleteCoupon, addDiscountCoupon } = require('../controllers/couponControllers')

router.get('/', getAllCouponCodes);
router.delete('/:couponId', deleteCoupon);
router.post('/add-discount-coupon', addDiscountCoupon)

router.get('/verify-coupon/:code', verifyCoupon);

module.exports = router