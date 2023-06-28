const { userService } = require("../services");

const createFirstUser = async () => {
  try {
    const existingUser = await userService.findAllUsers();
    if (existingUser.length === 0) {
      const firstUser = {
        name: "Nelson",
        lastName: "Secchi",
        username: "admin",
        email: "nelsonsecchi@santex.com",
        password: "admin",
      };

      await userService.createUser(firstUser);
      console.log("First user created.");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createFirstUser };
