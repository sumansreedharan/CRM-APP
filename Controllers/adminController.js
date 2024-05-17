const adminService = require("../Services/adminServices");

const adminController = {};

adminController.createUserWithRole = async (req, res) => {
  try {
    const { name, email, roleId } = req.body;
    const result = await adminService.createUserWithRole(
      { name, email },
      roleId
    );
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = adminController;
