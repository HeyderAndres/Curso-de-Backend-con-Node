import { models } from "../libs/sequelize.js";
import boom from '@hapi/boom';

class CustomerService {
  consturctor(){}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    return newCustomer;
  };

  async find() {
    const customer = await models.Customer.findAll({
      include: ['user']
    });
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  };

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  };

  async update(id, changes) {
    const customer = await this.findOne(id);
    const updatedCustomer = customer.update(changes);
    return updatedCustomer;
  };

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  };

}


export { CustomerService };
