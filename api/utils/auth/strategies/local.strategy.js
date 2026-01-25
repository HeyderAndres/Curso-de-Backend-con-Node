// importar passport strategy
import { Strategy } from 'passport-local';
import boom from '@hapi/boom';
import UserService from '../../../services/user.service.js';
import bcrypt from 'bcrypt';

const service = new UserService();

const LocalStrategy = new Strategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    console.log("ejecutando local estrategy");

    try {
      const user = await service.findByEmail(email);
      if (!user) {
        return done(boom.unauthorized(), false);
      }
      const isValidPass = await bcrypt.compare(password, user.password);
      if (!isValidPass) {
        return done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      return done(null, user);
    } catch {
      return done(boom.unauthorized(), false);
    }
  },
);

export { LocalStrategy };
