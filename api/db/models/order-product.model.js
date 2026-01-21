import { Model } from "sequelize";
import { ORDER_PRODUCT_TABLE } from "../schema/order-product.schema.js";

class OrderProduct extends Model {
  static associate(models) {
    // this.belongsToMany(models.)
  }


  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: 'OrderProduct',
      timestamps: false,
    };
  };
}

export { OrderProduct };
