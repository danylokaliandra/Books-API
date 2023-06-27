const { User } = require("../models");

const findAllUsers = async () => {
  try {
    const users = await User.findAll({
      where: { isDeleted: false },
      attributes: {
        exclude: ["isDeleted", "createdAt", "updatedAt"],
      },
    });
    return users;
  } catch (err) {
    throw err;
  }
};

const findOneUser = async (id) => {
  try {
    const user = await User.findOne({
      where: { id, isDeleted: false },
      attributes: {
        exclude: ["isDeleted", "createdAt", "updatedAt"],
      },
    });
    return user;
  } catch (err) {
    throw err;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (user, body) => {
  try {
    await User.update(body, { where: { id: user.id } });
    return true;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (user) => {
  try {
    await User.update({ isDeleted: true }, { where: { id: user.id } });
  } catch (err) {
    throw err;
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email, isDeleted: false } });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllUsers,
  findOneUser,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
};
