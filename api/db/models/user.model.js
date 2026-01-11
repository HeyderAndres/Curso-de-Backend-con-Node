import { Model } from "sequelize";

const USER_TABLE = 'users';

class User extends Model {
  static associate(){};

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
