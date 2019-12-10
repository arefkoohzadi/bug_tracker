const express = require("express");
const statusList = require("../routes/statusList");
const priorities = require("../routes/priorities");
const bugs = require("../routes/bugs");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/statusList", statusList);
  app.use("/api/priorities", priorities);
  app.use("/api/bugs", bugs);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);
};
