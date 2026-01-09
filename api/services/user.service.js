import { getConection } from '../libs/postgres';

class UserService {

  constructor(){
    this.conection = getConection();
  }

  async create(data) {
    return data;
  }

  async find() {
    const client = await this.conection;

  }

  async findOne(id) {
    return { id };
  }
  async update(id, changes) {
    return { id, ...changes };
  }

  async delete(id) {
    return { id };
  }
}

export default UserService;
