const user = require("../models/user");
const jwt = require("jwt-single");
const config = require("../config");

const tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user._id, iat: timestamp }, config.secret);
};

module.exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  user.findOne({ email }, (err, existingUser) => {
    if (err) return next(err);

    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    } else {
      const user = new user({ email, password }).save((err, user) => {
        if (err) return next(err);

        return res.json({ token: tokenForUser(user) });
      });
    }
  });
};

module.exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) });
};
