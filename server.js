const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const ContactController = require('./src/controllers/ContactController')

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



app.post('/contact/post', ContactController.sendMessage);






app.use(express.static("./build"));

app.get("/success", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build", "success.html"));
  });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})