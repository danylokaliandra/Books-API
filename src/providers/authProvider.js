const { User } = require("../models");

const validateUser = async (user) => {
  const { username, password } = user;
  try {
    const foundUser = await User.findOne({
      where: { username, password },
    });
    return foundUser;
  } catch (err) {
    throw err;
  }
};

module.exports = { validateUser };
