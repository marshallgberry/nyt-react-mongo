const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.Promise = require("bluebird");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact", 
    (err) => err ? 
        console.log(`Sorry, could not connect to the database.`) : 
        console.log(`Connected to database!`));


// Define middleware here
app.use(bodyParser({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require("./routes/api")(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
