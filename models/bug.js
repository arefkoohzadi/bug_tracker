const Joi = require("joi");
const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const { statusSchema } = require("./status");
const { prioritySchema } = require("./priority");

const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  status: {
    type: statusSchema,
    required: true
  },
  priority: {
    type: prioritySchema,
    required: true
  },
  owner: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  }
});

bugSchema.plugin(timestamps);

const Bug = mongoose.model("Bugs", bugSchema);

function validateBug(bug) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    statusId: Joi.objectId().required(),
    priorityId: Joi.objectId().required(),
    owner: Joi.string()
      .min(3)
      .max(50)
      .required()
  };

  return Joi.validate(bug, schema);
}

exports.Bug = Bug;
exports.validate = validateBug;
