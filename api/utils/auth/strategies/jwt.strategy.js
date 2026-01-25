import { Strategy, ExtractJwt } from "passport-jwt";
import { environments } from "../../../config/config.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: environments.auth.jwtSecret,
}

const JwtStrategy = new Strategy(options, (jwtPayload, done) => {
  return done(null, jwtPayload);

});

export default JwtStrategy;
