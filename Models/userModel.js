// userModel.js

const connection = require('../db');

const User = {};

User.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', userData, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

User.getUserByEmail = (email, callback) => {
  connection.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results[0]);
  });
};


module.exports = User;
