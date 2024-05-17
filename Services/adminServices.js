const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userModel = require("../Models/userModel");
const sendEmailPassword = require('../Utils/sendEmailPassword')

const adminService = {};

adminService.createUserWithRole = async (userData, roleId) => {
  try {
    const { name, email } = userData;
    const password = crypto.randomBytes(8).toString("hex"); // Generate a random 8-byte (16 characters) password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role_id: roleId, // Assigning roleId based on input
    };
    await userModel.createUser(newUser);

    let role;
    switch (roleId) {
      case 2:
        role = "Admin";
        break;
      case 3:
        role = "User";
        break;
      default:
        throw new Error("Invalid role ID");
    }
    console.log(email,password,"oooooo");
    await sendEmailPassword(email, password);
    console.log("Password email sent successfully");
    return { message: `${role} created successfully`, password };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
};

module.exports = adminService;
