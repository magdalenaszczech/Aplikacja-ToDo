const config = require("config");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const auth = require("./routes/auth");

if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

dotenv.config();
require("./db/db");

const port = process.env.PORT;
const app = express();

// Middleware
app.use(cors());
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Launch server
app.listen(port, err => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${port}`);
  }
});

// Routes
app.use("/api/users", users);
app.use("/api/auth", auth);

// In terminal type "npm start" to start nodemon