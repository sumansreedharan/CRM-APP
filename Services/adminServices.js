const bcrypt = require('bcrypt');
const userModel = require('../Models/userModel');

const adminService = {}

adminService.createAdmin = async (userData) => {
  try {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      name,
      email,
      password: hashedPassword,
      role_id: 2 // Assigning roleId for admin
    };
    await userModel.createUser(newAdmin);
    return { message: 'Admin created successfully' };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create admin');
  }
};

adminService.createUser = async (userData) => {
  try {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role_id: 3 // Assigning roleId for user
    };
    await userModel.createUser(newUser);
    return { message: 'User created successfully' };
  } catch (error) {
    console.log(error.message);
    throw new Error('Failed to create user');
  }
};

module.exports = adminService;
