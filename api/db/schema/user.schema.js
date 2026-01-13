import { DataTypes, Sequelize } from "sequelize";

const userSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email:{
    allowNull:false,
    unique: true,
    type: DataTypes.STRING(100)
  },
  password:{
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  role:{
    allowNull: false,
    type: DataTypes.STRING(50),
    defaultValue: 'customer'
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }

}

export { userSchema };
