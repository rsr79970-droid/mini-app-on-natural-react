import userModel from "../models/user.model.js";

class userRepository {
  async findAll() {
    return await userModel.find();
  }

  async findById(id) {
    return await userModel.findById(id);
  }

  async create(data) {
    return await userModel.create(data);
  }

  async findByEmail(email) {
    return await userModel.findOne({ email });
  }

  async findByUsername(username) {
    return await userModel.findOne({ username });
  }

  async update(id, data) {
    return await userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await userModel.findByIdAndDelete(id);
  }
}

export default new userRepository();
