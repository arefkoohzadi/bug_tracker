const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Status, validate } = require("../models/status");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const statusList = await Status.find()
    .select("-__v")
    .sort("name");
  res.send(statusList);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let status = new Status({ name: req.body.name });
  status = await status.save();

  res.send(status);
});

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const status = await Status.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true
    }
  );

  if (!status)
    return res.status(404).send("The status with the given ID was not found.");

  res.send(status);
});

router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const status = await Status.findByIdAndRemove(req.params.id);

  if (!status)
    return res.status(404).send("The status with the given ID was not found.");

  res.send(status);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const status = await Status.findById(req.params.id).select("-__v");

  if (!status)
    return res.status(404).send("The status with the given ID was not found.");

  res.send(status);
});

module.exports = router;
