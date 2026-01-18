import { Model } from "sequelize";
import { PRODUCT_TABLE } from "../schema/product.schema.js";

class Product extends Model {
  static associate(models){
    this.belongsTo(models.Category, {
      as: 'category'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  };

}

export { Product };

