import { Model } from "sequelize";

const CUSTOMER_TABLE = 'customers';

class Customer extends Model {
  static associate(models){
    this.belongsTo(models.User, {
      as: 'user'

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
