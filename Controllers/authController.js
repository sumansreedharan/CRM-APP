// authController.js

const authService = require('../Services/authService');

const authController = {};

authController.signup = (req, res) => {
  const userData = req.body;
  authService.signup(userData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create user' });
    }
    return res.status(201).json({ message: 'User created successfully' });
  });
};

authController.login = (req, res) => {
  const { email, password } = req.body;
  authService.login(email, password, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (result.message) {
      return res.status(401).json({ error: result.message });
    }
    return res.status(200).json({ token: result.token });
  });
};


module.exports = authController;
