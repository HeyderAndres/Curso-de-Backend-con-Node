import { Model } from "sequelize";

const CUSTOMER_TABLE = 'customers';

class Customer extends Model {
  static associate(models){
    this.belongsTo(models.User, {
      as: 'user'
    });
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}


export { Customer, CUSTOMER_TABLE}
