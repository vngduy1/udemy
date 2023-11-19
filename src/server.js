const express = require("express");
const path = require("path"); //common js
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config template engine
//Can tim kiem view engine o dau
app.set("views", path.join(__dirname, "views"));
//khai bao dung template engine nao
app.set("view engine", "ejs");

//Khai bao route
app.get("/", (req, res) => {
  res.send(`<h1>New World & nodemon</h1>`);
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${hostname}:${port}`);
});
