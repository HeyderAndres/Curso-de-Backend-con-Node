import { DataTypes, Sequelize } from "sequelize";

const CATEGORY_TABLE = 'categories';

const categorySchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING(255)
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

export { categorySchema, CATEGORY_TABLE };
