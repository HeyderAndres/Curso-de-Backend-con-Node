import { models } from "../libs/sequelize.js";
import boom from '@hapi/boom';
import { Op } from "sequelize";


class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  };

  async find(query) {
    const options = {
      include: ['category'],
      where: {}
    }

    const { limit, offset, price, priceMin, priceMax} = query;

    if (price) {
      options.where.price = price;
    }

    if ( limit && offset ){
      options.limit = limit;
      options.offset =offset
    }

    if (priceMin && priceMax) {
      options.where.price = {
        [Op.gte]: priceMin,
        [Op.lte]: priceMax
      }
    }

    const products = await models.Product.findAll(options);
    return products;
  };

  async findOne(id) {
    const product = await models.Product.findByPk(id);
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
