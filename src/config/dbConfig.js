const { Sequelize } = require("sequelize");

const database = new Sequelize({
  dialect: "sqlite",
  storage: "./bookshop.db",
});

const initializeConnection = async () => {
  try {
    await database.authenticate();
    console.log("Connection to the established database");
    await database.sync({ force: false });
    console.log("Synchronised models");
  } catch (err) {
    console.error("Error initialising the database", err.message);
  }
};

module.exports = { database, initializeConnection };
