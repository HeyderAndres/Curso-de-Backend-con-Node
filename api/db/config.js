import { environments } from '../config/config.js';

const USER = encodeURIComponent(environments.db.user);
const PASSWORD = encodeURIComponent(environments.db.password);
const URI = `postgresql://${USER}:${PASSWORD}@${environments.db.host}:${environments.db.port}/${environments.db.database}`;
console.log(
  environments.db.user,
  environments.db.password,
  environments.db.host,
  environments.db.port,
  environments.db.database,
);

export default {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
