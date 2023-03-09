const express = require("express");
const router = express.Router();

const uploadFile = require("../middlewares/uploadFile");
const UserController = require("../Controllers/user");

router
  .route("/")
  .get(UserController.index)
  .post(UserController.postUser);
  
module.exports = router;
