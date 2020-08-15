const express = require("express");
const bodyParser = require("body-parser");
const ifEquality = require("./views/helpers/ifEquality");
const expressHbs = require("express-handlebars");
const path = require("path");
const { customerRouter, getAllCustomers } = require("./routes/customerRouter");

const app = express();

// hand;e bars engine
const hbs = expressHbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "./views/layouts"),
  partialsDir: path.join(__dirname, "./views/partials"),
  helpers: {
    ifEquality
  }
});

//handlebars config for express
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//apis
app.get("/", (request, response) => {
  response.status(200).render("home", {
    layout: "hero",
    title: "Home"
  });
});

app.get("/signup", (request, response) => {
  response.status(200).render("signup", {
    layout: "navigation",
    title: "signup",
    action: "/api/signup",
    method: "POST"
  });
});

app.get("/analytics", (request, response) => {
  response.status(200).render("analytics", {
    layout: "navigation",
    title: "analytics",
    data: getAllCustomers()
  });
});

app.use("/api", customerRouter);

app.listen(8080, () => {
  console.log("server running");
});
