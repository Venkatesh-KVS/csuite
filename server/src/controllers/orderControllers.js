const ordersServices = require("..//services/orderServices");

const placeOrder = async (req, res) => {
    const orderData = req.body;

    ordersServices.placeOrder(orderData, (error, response) => {
        if(error){
            console.log(error);
            console.error('Internal Server Error(Placing Order):', error);
            res.status(500).json({ Status: "Failed" });
        } else if (response) {
            // mailServices.sendOrderPlacedMail(response, orderData);
            res.status(200).json({ Status: "Success", ticketId: response });
        }
    })
};

module.exports = {
    placeOrder,
};
