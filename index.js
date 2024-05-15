const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const authRoutes = require("./Routes/authRoute");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
app.use("/auth", authRoutes);
const PORT = process.env.SERVER_PORT;
const server = http.createServer(app);
server.listen(PORT, (req, res) => {
  console.log(`server running on port ${PORT}`);
});
