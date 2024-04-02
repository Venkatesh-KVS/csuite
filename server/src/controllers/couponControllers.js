const couponServices = require('../services/couponServices');
const { handleError } = require('../utils/handleError');

const getAllCouponCodes = async (req, res) => {
    couponServices.getAllCouponCodes((error, response) => {
        if (error) return handleError("Error at gettin all coupon codes", res, error);

        res.status(200).json(response);
    })
}

const verifyCoupon = async (req, res) => {
    const { code } = req.params;
    let { subtotalAmount, discountAmount, totalAmount } = req.query;

    couponServices.getCoupon(code, (error, response) => {
        if (error) return handleError("Error at fetching coupon.", res, error);
        
        if (response.length > 0 && response[0].coupon_code === code) {
            const { coupon_code, coupon_type, coupon_value } = response[0];

            if (coupon_type === 'perc') {
                discountAmount = subtotalAmount * (coupon_value / 100);
                totalAmount = subtotalAmount - discountAmount;
            } else if (coupon_type === 'flat') {
                discountAmount = coupon_value;
                totalAmount = subtotalAmount - discountAmount;
            } else if (coupon_type === 'absl') {
                discountAmount = coupon_value;
                totalAmount = subtotalAmount - discountAmount;
            }

            res.status(200).json({ 
                Status: "OK",
                coupon_code: coupon_code,
                subtotalAmount: subtotalAmount,
                discountAmount: discountAmount,
                totalAmount: totalAmount
            });
        } else {
            res.status(200).json({Status: "Invalid"});
        }
    });
};

module.exports = {
    verifyCoupon,
    getAllCouponCodes
}