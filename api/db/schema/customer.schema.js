import { DataTypes, Sequelize } from "sequelize"
import { USER_TABLE } from "../models/user.model.js";

const customerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type: DataTypes.STRING(50),
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: 'last_name'
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING(30),
  },
  createdAt: {
    allowNull: false,
    type:DataTypes.DATE(),
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export { customerSchema }
