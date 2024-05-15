// authController.js

const authService = require('../Services/authService');

const authController = {};


authController.signup = async (req, res) => {
  try {
    const userData = req.body;
    const result = await authService.signup(userData);
    res.status(201).json({ message: 'User created successfully', user: result });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }
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
    return res.status(200).json({ token: result.token,message:"user login successfull" });
  });
};


module.exports = authController;
