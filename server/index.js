const express = require("express");
const connectDB = require("./connection.js");
const app = express();
const dotenv = require("dotenv")

// Loading env variables
dotenv.config();

// Running Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB()
    .then(() => {
      console.log(
        `Connected to DB\nServer running on at http://localhost:${port}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
