const Joi = require("joi");
const mongoose = require("mongoose");
const { statusSchema } = require("./status");

const Bug = mongoose.model(
  "Bugs",
  new mongoose.Schema({
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
    numberInStock: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    },
    dailyRentalRate: {
      type: Number,
      required: true,
      min: 0,
      max: 255
    }
  })
);

function validateBug(bug) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    statusId: Joi.objectId().required(),
    numberInStock: Joi.number()
      .min(0)
      .required(),
    dailyRentalRate: Joi.number()
      .min(0)
      .required()
  };

  return Joi.validate(bug, schema);
}

exports.Bug = Bug;
exports.validate = validateBug;
