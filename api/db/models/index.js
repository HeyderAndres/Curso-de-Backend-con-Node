import { User } from "../models/user.model.js";
import { userSchema } from "../schema/user.schema.js";
import { customerSchema } from "../schema/customer.schema.js";
import { Customer } from "./customer.model.js";

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

const models = {
  User,
  Customer
};

export { setupModels, models };
