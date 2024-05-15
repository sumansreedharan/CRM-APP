// // db.js

// const mysql = require('mysql');
// require("dotenv").config();

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: process.env.ROOT_PASSWORD,
//   database: process.env.DATABASE,
// });

// module.exports = pool;

const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.ROOT_PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }

  console.log('Connected to MySQL server');
});

module.exports = connection;

