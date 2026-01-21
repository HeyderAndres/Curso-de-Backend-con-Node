import { User } from "../models/user.model.js";
import { userSchema } from "../schema/user.schema.js";
import { customerSchema } from "../schema/customer.schema.js";
import { Customer } from "./customer.model.js";
import { Order } from "./order.model.js";
import { orderSchema } from "../schema/order.schema.js";
import { Product } from "./product.model.js";
import { productSchema } from "../schema/product.schema.js";
import { Category } from "./category.model.js";
import { categorySchema} from "../schema/category.schema.js"
import { OrderProduct } from "./order-product.model.js";
import { orderProductSchema } from "../schema/order-product.schema.js";

function setupModels(sequelize) {
  User.init(userSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Order.init(orderSchema, Order.config(sequelize));
  Product.init(productSchema, Product.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));
  OrderProduct.init(orderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Order.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
  OrderProduct.associate(sequelize.models);


}

const models = {
  User,
  Customer,
  Product,
  Category,
  Order,
  OrderProduct
};

export { setupModels, models };
