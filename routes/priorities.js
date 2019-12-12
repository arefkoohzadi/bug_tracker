const validateObjectId = require("../middleware/validateObjectId");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Priority, validate } = require("../models/priority");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const priorities = await Priority.find()
    .select("-__v")
    .sort("name");
  res.send(priorities);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let priority = new Priority({ name: req.body.name });
  priority = await priority.save();

  res.send(priority);
});

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.priority(400).send(error.details[0].message);

  const priority = await Priority.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true
    }
  );

  if (!priority)
    return res
      .status(404)
      .send("The priority with the given ID was not found.");

  res.send(priority);
});

router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const priority = await Priority.findByIdAndRemove(req.params.id);

  if (!priority)
    return res
      .status(404)
      .send("The priority with the given ID was not found.");

  res.send(priority);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const priority = await Priority.findById(req.params.id).select("-__v");

  if (!priority)
    return res
      .status(404)
      .send("The priority with the given ID was not found.");

  res.send(priority);
});

module.exports = router;
