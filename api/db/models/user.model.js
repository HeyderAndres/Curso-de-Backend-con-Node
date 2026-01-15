import { Model } from "sequelize";

const USER_TABLE = 'users';

class User extends Model {
  static associate(models){
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId',
    })
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

export { User, USER_TABLE };
