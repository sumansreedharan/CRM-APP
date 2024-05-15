// db.js

const mysql = require('mysql');
require("dotenv").config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: process.env.ROOT_PASSWORD,
  database: process.env.DATABASE,
});

module.exports = pool;
