const express = require("express");
const http = require("http");
require("dotenv").config();
const app = express();
const PORT = process.env.SERVER_PORT;
const server = http.createServer(app);
server.listen(PORT, (req, res) => {
  console.log(`server running on port ${PORT}`);
});
