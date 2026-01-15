'use strict';

import { customerSchema } from "../schema/customer.schema.js";
import { CUSTOMER_TABLE } from "../models/customer.model.js";

export default {
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, customerSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
  },
};
