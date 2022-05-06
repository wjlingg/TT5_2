const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors()); // Remove later when using AWS DB
app.use(express.json()); // Middleware

// Change to your credentials
const db = mysql.createConnection({
  host: "dbshack.mysql.database.azure.com",
  user: "dbs_admin@dbshack",
  password: "password1234!",
  database: "project_expenses",
});

// Change to match what we need from specs

// Front-end React Example,
// I will use Axios to send a request to http://localhost:3001/create
// Axios.post("http://localhost:3001/create", { body data })

app.post("/project", (req, res) => {
  db.query(
    "SELECT * FROM project WHERE user_id = ?",
    [req.body.userID],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.post("/expense", (req, res) => {
  db.query(
    "SELECT * FROM expense WHERE project_id = ?",
    [req.body.userID],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.get("/category", (req, res) => {
  db.query("SELECT * FROM category", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get("/user", (req, res) => {
  db.query("SELECT * FROM user", (error, result) => {
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
