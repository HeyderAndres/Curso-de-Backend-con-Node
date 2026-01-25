import boom from '@hapi/boom';
import { environments } from '../config/config.js'

function validateApiKey(req, res, next) {
  const apiKey = req.headers['api_key'];
  if (apiKey === environments.auth.apiKey) {
    next();
  }else{
    next(boom.unauthorized());
  }

}

export { validateApiKey };

