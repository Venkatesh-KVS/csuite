require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
});

const createpoolConnection = () => {
  return pool;
};

module.exports = createpoolConnection;

