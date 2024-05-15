// userModel.js

const pool = require('../db');

const User = {};

User.createUser = (userData, callback) => {
  pool.query('INSERT INTO users SET ?', userData, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

User.getUserByEmail = (email, callback) => {
  pool.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};


module.exports = User;
