const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");

const SERVER_SECRET = process.env.SERVER_SECRET;

const jwtStrategy = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SERVER_SECRET,
};

passport.use(
  "jwt",
  new Strategy(jwtStrategy, async (jwtPayload, done) => {
    try {
      const user = jwtPayload;
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  })
);

const authMiddleware = passport.authenticate("jwt", { session: false });

module.exports = { authMiddleware, SERVER_SECRET };
