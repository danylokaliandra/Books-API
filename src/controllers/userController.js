const { userService } = require("../services");

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.status(200).json({ message: "Users found", users: users });
  } catch (err) {
    res.status(500).json({ action: "findAllUsers", error: err });
  }
};

const findOneUser = async (req, res) => {
  try {
    const user = await userService.findOneUser(req.params.id);
    res.status(200).json({ message: "User found", user: user });
  } catch (err) {
    res.status(500).json({ action: "findOneUser", error: err });
  }
};

const createUser = async (req, res) => {
  try {
    const userCreated = await userService.createUser(req.body);
    res
      .status(201)
      .json({ message: "User saved successfully", user: userCreated });
  } catch (err) {
    res.status(500).json({ action: "createUser", error: err });
  }
};

const updateUser = async (req, res) => {
  try {
    await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ action: "updateUser", error: err });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ message: "User removed successfully" });
  } catch (err) {
    res.status(500).json({ action: "deleteUser", error: err });
  }
};

module.exports = {
  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  deleteUser,
};
