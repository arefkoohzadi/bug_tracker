const { Bug, validate } = require("../models/bug");
const { Status } = require("../models/status");
const { priority } = require("../models/priority");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const moment = require("moment");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const bugs = await Bug.find()
    .select("-__v")
    .sort("name");
  res.send(bugs);
});

router.post("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const status = await Status.findById(req.body.statusId);
  if (!status) return res.status(400).send("Invalid status.");

  const bug = new Bug({
    title: req.body.title,
    status: {
      _id: status._id,
      name: status.name
    },
    priority: {
      _id: priority._id,
      name: priority.name
    },
    owner: req.body.owner,
    publishDate: moment().toJSON()
  });
  await bug.save();

  res.send(bug);
});

router.put("/:id", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const status = await Status.findById(req.body.statusId);
  if (!status) return res.status(400).send("Invalid status.");

  const priority = await priority.findById(req.body.priorityId);
  if (!priority) return res.status(400).send("Invalid priority.");

  const bug = await Bug.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      status: {
        _id: status._id,
        name: status.name
      },
      priority: {
        _id: priority._id,
        name: priority.name
      },
      owner: req.body.owner
    },
    { new: true }
  );

  if (!bug)
    return res.status(404).send("The bug with the given ID was not found.");

  res.send(bug);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const bug = await Bug.findByIdAndRemove(req.params.id);

  if (!bug)
    return res.status(404).send("The bug with the given ID was not found.");

  res.send(bug);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const bug = await Bug.findById(req.params.id).select("-__v");

  if (!bug)
    return res.status(404).send("The bug with the given ID was not found.");

  res.send(bug);
});

module.exports = router;
