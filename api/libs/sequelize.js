import { Sequelize } from "sequelize";
import { environments as config } from "../config/config.js";
import { setupModels } from "../db/models/index.js";

const USER = encodeURIComponent(config.db.user);
const PASSWORD = encodeURIComponent(config.db.password);

// const URI = `postgresql://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;
const URI = `mysql://${USER}:${PASSWORD}@${config.db.host}:${config.db.port}/${config.db.database}`;


const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  // dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);
sequelize.sync();

const { models } = sequelize;
export { models };
