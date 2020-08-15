const Customer = require("../models/customerModel");

const customerData = [
  {
    firstName: "Alphabet",
    lastName: "Google",
    gender: "Male",
    profession: "Student",
    years: 0,
    city: "chennai",
    address: "vit chennai",
    number: "+919876543210"
  },
  {
    firstName: "Facebook",
    lastName: "Instagram",
    gender: "Male",
    profession: "ContentWriter",
    years: 10,
    city: "mumbai",
    address: "mumbai",
    number: "+919876543211"
  },
  {
    firstName: "Twitter",
    lastName: "Bootstrap",
    gender: "Male",
    profession: "Management",
    years: 5,
    city: "kolkata",
    address: "kolkata",
    number: "+919876543212"
  },
  {
    firstName: "Tesla",
    lastName: "SpaceX",
    gender: "Male",
    profession: "IT",
    years: 0,
    city: "hyderabad",
    address: "hyderabad",
    number: "+919876543213"
  }
];

const customerSeeder = async () => {
  await Customer.sync({ force: true });

  customerData.forEach(async (customer) => {
    try {
      const result = await Customer.create(customer);
      console.log(result.get());
    } catch (e) {
      console.error(e);
    }
  });
};

customerSeeder();
