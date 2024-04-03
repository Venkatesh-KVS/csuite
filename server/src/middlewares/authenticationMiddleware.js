require('dotenv').config();
const jwt = require('jsonwebtoken');
const privateKey = process.env.TOKEN_SECRET_KEY;

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ TokenError: "not Authenticated, Login!" });
    } else {
        jwt.verify(token, privateKey, (err, decoded) => {
            if (err) {
                // console.log({ TokenIncorrectError: "token not correct" });
                // console.log(err);
                return res.json({ Error: "Bad Request!" });
            } else {
                req.userId = decoded.sub;
                next();
            }
        });
    }
};

module.exports = { verifyUser };