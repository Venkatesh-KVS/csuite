const createpoolConnection = require("../../config/database");
const pool = createpoolConnection();

const getAllTickets = (callback) => {
    pool.query("SELECT * FROM tickets", (error, response) => {
        callback(error, response);
    });
}

const getTicketPrice = (callback) => {
    pool.query("SELECT * FROM properties WHERE property = 'ticket_price'", (error, response) => {
        callback(error, response);
    });
}

const SetNewPrice = (newPrice, callback) => {
    pool.query(`UPDATE properties SET value = ${newPrice} WHERE property = 'ticket_price'`, (error, response) => {
        callback(error, response);
    });
}

const getTktInfo = (ticketId, callback) => {
    pool.query("SELECT * FROM tickets WHERE ticket_id = ?", [ticketId], (error, response) => {
        callback(error, response);
    });
}

const getBenificairyDetails = (bnfId, callback) => {
    pool.query(
        "SELECT ob.*, u.mobile_number FROM order_benificiary ob LEFT JOIN users u ON ob.user_id = u.user_id WHERE ob.bnf_id = ?",
        [bnfId],
        (error, response) => {
            callback(error, response);
        }
    );
};

const getBillingDetails = (billingId, callback) => {
    pool.query(
        "SELECT * FROM order_billing WHERE order_billing_id = ?",
        [billingId],
        (error, response) => {
            callback(error, response);
        }
    );
};

const getPaymentDetails = (paymentId, callback) => {
    pool.query(
        "SELECT * FROM order_payments WHERE payment_id = ?",
        [paymentId],
        (error, response) => {
            callback(error, response);
        }
    );
};


module.exports = {
    getAllTickets,
    getTicketPrice,
    SetNewPrice,
    getTktInfo,
    getBenificairyDetails,
    getBillingDetails,
    getPaymentDetails
};