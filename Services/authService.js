// authService.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel");
require("dotenv").config();

const authService = {};

authService.signup = (userData, callback) => {
  // Hash password
  bcrypt.hash(userData.password, 10, (err, hash) => {
    if (err) {
      return callback(err, null);
    }
    const newUser = { ...userData, password: hash };

    userModel.createUser(newUser, callback);
  });
};

authService.login = (email, password, callback) => {
  // Fetch user by email
  userModel.getUserByEmail(email, (err, user) => {
    if (err) {
      return callback(err, null);
    }
    if (!user) {
      return callback(null, { message: "User not found" });
    }
    // Compare password hash
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return callback(null, { message: "Invalid email or password" });
      }
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      return callback(null, { token });
    });
  });
};

module.exports = authService;
