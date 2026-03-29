import userService from "../services/user.service.js";

class UserController {
  async findAll(req, res) {
    try {
      const users = await userService.findAll();

      res.status(200).json({
        message: "Users list",
        data: users,
      });
    } catch (error) {
      res.status(error.status || 500).json({
        message: `Error: ${error.message}`,
        status: error.status,
      });
    }
  }

  async findById(req, res) {
    try {
      const user = await userService.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({
        message: "User found",
        data: user,
      });
    } catch (error) {
      res.status(error.status || 500).json({
        message: `Error: ${error.message}`,
        status: error.status,
      });
    }
  }

  async create(req, res) {
    try {
      const { name, email, password, username, phone } = req.body;

      if (
        !name ||
        !name.firstname ||
        !name.lastname ||
        !email ||
        !password ||
        !username ||
        !phone
      ) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const user = await userService.create({
        name,
        email,
        password,
        username,
        phone,
      });

      res.status(201).json({
        message: "User created",
        data: user,
      });
    } catch (error) {
      res.status(error.status || 500).json({
        message: `Error: ${error.message}`,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const user = await userService.update(id, req.body);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({
        message: "User updated",
        data: user,
      });
    } catch (error) {
      res.status(error.status || 500).json({
        message: `Error: ${error.message}`,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await userService.delete(id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(204).json({
        message: "User deleted",
      });
    } catch (error) {
      res.status(error.status || 500).json({
        message: `Error: ${error.message}`,
      });
    }
  }
}

export default new UserController();
