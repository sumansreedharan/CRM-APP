const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const authRoutes = require("./Routes/authRoute");
const adminRoutes = require('./Routes/adminRoute')
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use("/", authRoutes);
app.use("/", adminRoutes);
const PORT = process.env.SERVER_PORT;
const server = http.createServer(app);
server.listen(PORT, (req, res) => {
  console.log(`server running on port ${PORT}`);
});
