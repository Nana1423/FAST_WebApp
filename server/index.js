const express = require("express");
const app = express();
const connectDB = require("./connection.js")
const routes = require("./routes/routes.js")
app.use(express.json())

// Loading env variables
require('dotenv').config()

// Loading routes
app.use("/", routes)

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
