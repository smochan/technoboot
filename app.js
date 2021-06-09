const express = require("express");
const { create, read, update, del } = require("./controllers/controller");
const database = require("./database");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const start = async () => {
  await database.connect();

  app.get("/", function (req, res) {
    res.redirect("/create");
  });

  app.post("/create", create);

  app.post("/read", read);

  app.post("/update", update);

  app.post("/delete", del);

  app.listen(3000, function () {
    console.log("Server started on port 3000");
  });
};

start();
