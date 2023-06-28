const { userProvider } = require("../providers");

const findAllUsers = async () => {
  try {
    const users = await userProvider.findAllUsers();
    if (!users) throw "No users found";
    return users;
  } catch (err) {
    throw err;
  }
};

const findOneUser = async (id) => {
  try {
    const user = await userProvider.findOneUser(id);
    if (!user) throw `User with id ${id} does not exist`;
    return user;
  } catch (err) {
    throw err;
  }
};

const createUser = async (body) => {
  const user = await userProvider.findUserByEmail(body.email);
  if (user) throw "This email already exists";
  try {
    const userCreated = await userProvider.createUser(body);
    return userCreated;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (id, body) => {
  const user = await userProvider.findOneUser(id);
  if (!user) throw `User with id ${id} does not exist`;
  try {
    await userProvider.updateUser(user, body);
    return true;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (id) => {
  const user = await userProvider.findOneUser(id);
  if (!user) throw `User with id ${id} does not exist`;
  try {
    await userProvider.deleteUser(user);
    return true;
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
};
