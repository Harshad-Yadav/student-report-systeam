const express = require("express");
const app = express();

// Define a basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Student Report System!");
});

// Set the server to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
