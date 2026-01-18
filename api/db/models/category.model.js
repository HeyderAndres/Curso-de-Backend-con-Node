import { Model } from "sequelize";
import { CATEGORY_TABLE } from "../schema/category.schema.js";

class Category extends Model {
  static associate(models){
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId'
    });
  };

  static config(sequelize){
    return {
      sequelize,
      timestamps: false,
      tableName: CATEGORY_TABLE,
      modelName: 'Category'
    };
  };
};

export { Category }
