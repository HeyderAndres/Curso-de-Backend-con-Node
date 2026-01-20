import { models } from "../libs/sequelize.js";
import boom from '@hapi/boom';


class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  };

  async find() {
    const products = await models.Product.findAll();
    return products;
  };

  async findOne(id) {
    const product = await models.Products.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }

    if (product.isBlock) {
      throw boom.conflict('Product is block');
    }

    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const updatedProduct = product.update(changes);
    return updatedProduct;
  };

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  };
}

export default ProductsService;
