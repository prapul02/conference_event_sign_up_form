const express = require("express");
const Customer = require("../models/customerModel");

const customerRouter = express.Router();

customerRouter.post("/signup", async (request, response) => {
  try {
    console.log(request.body);
    if (request.body.firstName) {
      const result = await Customer.create(request.body);
      response.status(200).json({
        message: "Registerd Successfully",
        data: result.get()
      });
    } else {
      response.status(400).send("Invalid Details");
    }
  } catch (e) {
    response.status(500).send("Internal Server Error");
  }
});

const getAllCustomers = async () => {
  const result = await Customer.findAll();
  // console.log(JSON.parse(JSON.stringify(result)));
  return JSON.parse(JSON.stringify(result));
};

customerRouter.get("/customers", async (request, response) => {
  try {
    response.status(200).json({
      data: await getAllCustomers()
    });
  } catch (e) {
    response.status(500).send("Internal Server Error");
  }
});

module.exports = {
  customerRouter,
  getAllCustomers
};
