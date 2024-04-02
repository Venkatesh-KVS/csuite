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

module.exports = {
    getAllCouponCodes,
    getCoupon
}