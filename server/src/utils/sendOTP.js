require('dotenv').config();
const axios = require('axios');

const sendOTP = async (num, otp) => {
  // console.log(num, otp);
  try {
    const data = {
      flow_id: process.env.SMS_FLOW_ID, // Registered flow id
      sender: process.env.NUTODA, // Registered header
      mobiles: "91" + num, // Mobile number with country code without + symbol
      reason: "Verify Mobile Number", // Variable
      otp: otp, // Variable
      validfor: "2mins" // Variable
    };

    const options = {
      method: 'POST',
      url: process.env.SMS_URL,
      headers: {
        'Content-type': 'application/json',
        'authkey': process.env.SMS_AUTH_KEY,
      },
      data: JSON.stringify(data),
    };

    const response = await axios(options);
    if (response.type === "success") {
      return { Status: "OTP sent!", OTP: otp };
    }
  } catch (error) {
    console.log(error);
    throw error; // Throw the error to handle it in the calling function
  }
};

module.exports = {
  sendOTP
}