const express = require("express");
const app = express();
app.use(express.json())
const user = require("./userRouter");
const comment = require("./commentRouter");
const issue = require("./issueRouter");
app.use("/",comment);
app.use("/",user);
app.use("/",issue);
const port = 4000;

const mongoose = require("mongoose");

var uri = "mongodb://localhost:27017/details";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully Shamika");
});
app.listen(port, function() {
  console.log("Shamika the server is running on Port: " + port);
});