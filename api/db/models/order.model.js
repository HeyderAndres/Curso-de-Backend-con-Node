import { Model } from "sequelize";
import { ORDER_TABLE } from "../schema/order.schema.js";

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'customer'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  };
};

export { Order };
