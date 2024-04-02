const handleError = (message, res, error) => {
    console.log(message, error);
    res.status(500).json({ error: 'An error occurred' });
}
const handleErrorLog = (message, error) => {
    console.log(message, error);
}

module.exports = { 
    handleError,
    handleErrorLog
}