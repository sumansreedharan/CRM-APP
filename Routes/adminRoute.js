const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');

router.post('/createAdmin', adminController.createAdmin);
router.post('/createUser',adminController.createUserByAdmin)


module.exports = router;
