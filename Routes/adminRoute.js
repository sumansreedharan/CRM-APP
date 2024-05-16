const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const superAdminAuth = require('../Middlewares/superAdminAuth')

router.post('/createAdmin',adminController.createAdmin);
router.post('/createUser',superAdminAuth,adminController.createUserByAdmin)


module.exports = router;
