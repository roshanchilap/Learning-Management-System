const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/courses", require("./routes/courses.js"));

app.listen(port, () => {
  console.log(`MynoteBook app listening at http://localhost:${port}`);
});
