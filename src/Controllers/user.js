const User = require("../Models/user");

const index = (req, res, next) => {
  User.find({})
    .then((data) => {
      return res.status(200).json({
        data,
      });
    })
    .catch((err) => next(err));
};

const postUser = (req, res, next) => {
  // req.body.avatar = `avatarUsers/${req.file.filename}`;
  const dataUser = new User(req.body);
  dataUser
    .save()
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((err) => next(err));
};

module.exports = {
  index,
  postUser,
};
