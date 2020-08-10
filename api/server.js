const express = require('express');
const CORS = require('cors');



const server = express();
server.use(express.json());

module.exports = server;