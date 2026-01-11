import { models } from "../libs/sequelize.js";
import boom from '@hapi/boom';

class UserService {

  constructor(){
  }

  async create(data) {
    try {
      const newUser = await models.User.create(data);
      return newUser;
    } catch (error) {
      throw boom.conflict(error.message);
    }
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.User.findOne({
      where: { id }
    });
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }


  async update(id, changes) {
    const user = await models.User.update(changes, {
      where: { id }
    })
    
    return { id };
  }

  async delete(id) {
    const result = await models.User.destroy({
      where: { id }
    })

    return { id };
  }
}

export default UserService;
