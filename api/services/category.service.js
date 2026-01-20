import { models } from "../libs/sequelize.js";

class CategoryService {
  constructor(){

  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  };

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    return category;
  };

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  };

  async update(id, changes) {
    const category = await this.findOne(id);
    const updatedCategory = category.update(changes);
    return updatedCategory;
  };

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  };

}

export { CategoryService };
