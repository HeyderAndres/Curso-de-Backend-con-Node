import { Pool } from 'pg';
import { environments as config } from '../config/config.js';

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);

const URI = `postgresql://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;

  const pool = new Pool({
    connectionString: URI,
  });

export { pool };
