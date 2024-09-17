const mongoose = require("mongoose");
const roleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    }
  },
  { timeStamp: true }
);
const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
