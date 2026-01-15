'use strict';
import { DataTypes } from 'sequelize';

import { customerSchema } from '../schema/customer.schema.js';
import { CUSTOMER_TABLE } from '../models/customer.model.js';

export default {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down(queryInterface) {

  },
};
