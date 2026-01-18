'use strict';

import { CATEGORY_TABLE, categorySchema } from "../schema/category.schema.js";
import { ORDER_TABLE, orderSchema } from "../schema/order.schema.js";
import { PRODUCT_TABLE, productSchema } from "../schema/product.schema.js";



export default {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(ORDER_TABLE, orderSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE, productSchema);
    await queryInterface.dropTable(ORDER_TABLE, orderSchema);
    await queryInterface.dropTable(CATEGORY_TABLE, categorySchema);
  },
};
