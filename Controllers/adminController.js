const adminService = require('../Services/adminServices');
const adminController = {}

//superAdmin creating admin

adminController.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await adminService.createAdmin({ name, email, password });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//superAdmin creating user

adminController.createUserByAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await adminService.createUser({ name, email, password });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = adminController;