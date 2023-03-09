const mongodb = require("mongoose");
const Schema = mongodb.Schema;

const UserSchema = new Schema(
  {
    user_name: {
      type: String,
    },
    user_password: {
      type: String,
    },
    avatar: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongodb.model("User", UserSchema);
module.exports = User;
