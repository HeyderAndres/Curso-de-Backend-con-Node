import { LocalStrategy } from "./strategies/local.strategy.js";
import passport from "passport";
import JwtStrategy from "./strategies/jwt.strategy.js";

passport.use(LocalStrategy);
passport.use(JwtStrategy);

export default passport;
