const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

app.use(bodyParser.json());

// Start the API server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
