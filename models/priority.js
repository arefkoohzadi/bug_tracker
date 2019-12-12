const Joi = require("joi");
const mongoose = require("mongoose");

const prioritySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  }
});

const Priority = mongoose.model("Priority", prioritySchema);

function validatePriority(priority) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
  };

  return Joi.validate(priority, schema);
}

exports.prioritySchema = prioritySchema;
exports.Priority = Priority;
exports.validate = validatePriority;
