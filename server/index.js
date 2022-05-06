const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors()); // Remove later when using AWS DB
app.use(express.json()); // Middleware

// Change to your credentials
const db = mysql.createConnection({
  user: "root",
  password: "admin",
  host: "localhost",
  database: "project_expenses",
});

app.get("/projects", (req, res) => {
  db.query("SELECT * FROM project", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running");
});
