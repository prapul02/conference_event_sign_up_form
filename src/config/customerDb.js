const { Sequelize } = require("sequelize");

const customerDb = new Sequelize(process.env.DB_URL);

(async () => {
  try {
    await customerDb.authenticate;
    console.log("connection to db established successfully");
  } catch (error) {
    console.log("connection to db failed:", error);
  }
})();

module.exports = customerDb;
