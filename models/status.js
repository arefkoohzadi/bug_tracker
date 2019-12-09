const Joi = require("joi");
const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Status = mongoose.model("Status", statusSchema);

function validateStatus(status) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(status, schema);
}

exports.statusSchema = statusSchema;
exports.Status = Status;
exports.validate = validateStatus;
