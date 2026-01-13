'use strict';

import { userSchema } from '../schema/user.schema.js';
import { USER_TABLE } from '../models/user.model.js';

export default {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, userSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
  },
};
