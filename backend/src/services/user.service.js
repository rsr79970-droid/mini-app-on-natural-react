import userRepository from "../repositories/user.repository.js";

class UserService {
  async findAll() {
    return await userRepository.findAll();
  }

  async findById(id) {
    return await userRepository.findById(id);
  }

  async create(data) {
    const emailExists = await userRepository.findByEmail(data.email);
    if (emailExists) {
      throw new Error("Email already exists");
    }

    const usernameExists = await userRepository.findByUsername(data.username);
    if (usernameExists) {
      throw new Error("Username already exists");
    }

    return userRepository.create(data);
  }

  async update(id, data) {
    return await userRepository.update(id, data);
  }

  async delete(id) {
    return await userRepository.delete(id);
  }
}

export default new UserService();
