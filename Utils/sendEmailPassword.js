const nodemailer = require("nodemailer");
require("dotenv").config();
console.log(process.env.VERIFY_EMAIL);
console.log(process.env.PASSWORD_KEY);
const transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.VERIFY_EMAIL,
    pass: process.env.PASSWORD_KEY,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 20000,
  socketTimeout: 20000,
  debug: true, 
});

const sendPasswordEmail = async (email, password) => {
  try {
    const mailOptions = {
      from: process.env.VERIFY_EMAIL,
      to: email,
      subject: "Welcome to Our Platform",
      html: `<p>Hello,</p><p>Your account has been successfully created. Here is your generated password: <strong>${password}</strong></p><p>Please change your password after logging in for security purposes.</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Password and email sent successfully");
  } catch (error) {
    console.error("Error sending password and email:", error);
    throw new Error("Failed to send password and email");
  }
};

module.exports = sendPasswordEmail;