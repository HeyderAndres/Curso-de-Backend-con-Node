import { User } from "../models/user.model.js";
import { userSchema } from "../schema/user.schema.js";

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
}

const models = {
  User,
}

export { setupModels, models };
