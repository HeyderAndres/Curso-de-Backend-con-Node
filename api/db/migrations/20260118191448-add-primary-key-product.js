'use strict';

import { PRODUCT_TABLE } from '../schema/product.schema.js';

export default {
  async up(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE ${PRODUCT_TABLE}
      ADD PRIMARY KEY (id);
    `);
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE ${PRODUCT_TABLE}
      DROP CONSTRAINT ${PRODUCT_TABLE}_pkey;
    `);
  },
};
