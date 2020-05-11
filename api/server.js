const express = require("express");
const accountRoute = require("../accounts/accountRoute");

// const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRoute);

module.exports = server;
