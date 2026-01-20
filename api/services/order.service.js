import { models } from "../libs/sequelize.js";

class OrderService {
  constructor() {

  }

  async find() {
    const orders = await models.Order.findAll();
    return orders;
  };

  async findOne(id) {
    const order = await models.Order.findByPk(id);
    return order;
  };

  async cretare(data){
    const newOrder = await models.Order.create(data);
    return newOrder
  };

  async update(id, changes) {
    const order = await this.findOne(id);
    const updatedOrder = order.update(changes);
    return updatedOrder;
  };

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { ide };
  };
}

export { OrderService };
