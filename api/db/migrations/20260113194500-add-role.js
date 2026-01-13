'use strict';

import { userSchema } from '../schema/user.schema.js';
import { USER_TABLE } from '../models/user.model.js';

export default {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'role', userSchema.role);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'role');
  }
};
