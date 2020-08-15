const { DataTypes } = require("sequelize");
const customerDb = require("../config/customerDb");

const Customer = customerDb.define("customers", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name"
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name"
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Male", "Female"],
    allowNull: false
  },
  profession: {
    type: DataTypes.ENUM,
    values: ["IT", "Management", "Student", "ContentWriter"],
    allowNull: false
  },
  years: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "customer_city"
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "customer_address"
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "customer_phone"
  }
});

module.exports = Customer;
