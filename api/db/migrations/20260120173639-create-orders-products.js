'use strict';

import { ORDER_PRODUCT_TABLE, orderProductSchema } from "../schema/order-product.schema.js";

export default {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, orderProductSchema);

  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);

  },
};
