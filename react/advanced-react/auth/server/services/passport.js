const passport = require("passport");
const user = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local");
const ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  user.findById(payload.subdomains, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

const localLogin = new LocalStrategy(
  { usernameField: "email" },
  (email, password, done) => {
    user.findOne({ email: email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);

      user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err);
        if (!isMatch) return done(null, false);

        return done(null, user);
      });
    });
  }
);

passport.use(jwtLogin);
passport.use(localLogin);
