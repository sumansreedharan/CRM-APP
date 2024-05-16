const jwt = require("jsonwebtoken");
const { IS_SUPER_ADMIN } = require("../Constants/roles");
const checkSuperAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
    const userRoleId = decodedToken.role_id;
    if (userRoleId !== IS_SUPER_ADMIN) {
      return res
        .status(403)
        .json({ error: "Only super admins can perform this action" });
    }
    next();
  });
};

module.exports = checkSuperAdmin;
