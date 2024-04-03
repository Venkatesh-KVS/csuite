const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const getAllCouponCodes = (callback) => {
    pool.query('SELECT * FROM coupons', (error, response) => {
        callback(error, response);
    })
}

const getCoupon = (code, callback) => {
    pool.query('SELECT * FROM coupons WHERE coupon_code = ?', [code], (error, response) => {
        callback(error, response);
    })
}

const addDiscountCoupon = (couponData, callback) => {
    const { couponCode, discountType, discountValue, validity } = couponData;
    pool.query(
        'INSERT INTO coupons (coupon_code, coupon_type, coupon_value, coupon_validity) VALUES (?,?,?,?)', 
        [couponCode, discountType, discountValue, validity], 
        (error, response) => {
            callback(error, response);
        }
    )
}

const deleteCoupon = (couponId, callback) => {
    pool.query(
        `DELETE FROM coupons where coupon_id = ${couponId}`,
        (error, response) => {
            callback(error, response);
        }
    )
}

module.exports = {
    getAllCouponCodes,
    addDiscountCoupon,
    deleteCoupon,
    getCoupon
}