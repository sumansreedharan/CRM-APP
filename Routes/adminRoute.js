const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");
const superAdminAuth = require("../Middlewares/superAdminAuth");

router.post("/createRoles", adminController.createUserWithRole);

module.exports = router;
