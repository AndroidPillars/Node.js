const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
dotenv.config();

// MONGO_URI=mongodb://localhost/node-api 
mongoose.connect(process.env.MONGO_URI, 
  { useNewUrlParser: true })
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
})

const postRoutes = require("./routes/post");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Node js Api is Listening on port: ${port}`);
});
