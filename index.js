const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const ContactController = require('./src/controllers/ContactController')

const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/contact/post', ContactController.sendMessage);




app.use(express.static(path.resolve(__dirname, "public")));

app.get("/success", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "success.html"));
  });

app.get("*", (req, res) => {


  console.log('Server is running!')

  res.sendFile(path.resolve(__dirname, "public", "index.html"));
  console.log(path.resolve(__dirname, "public", "index.html"));
});




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})


module.exports = app;
