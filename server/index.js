const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors()); // Remove later when using AWS DB
app.use(express.json()); // Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
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

// req parameter will contain whatever "body data" i sent to the back-end.
app.post("/create", (req, res) => {
  // Replace the variables with the database data variables
  const { name, age, country, position, salary } = req.body;
  if (!name || !age || !country || !position || !salary) {
    res.status(400).send("Error: missing data");
  } else {
    db.query(
      "INSERT INTO employees (name, age, country, position, salary) VALUES (?, ?, ?, ?, ?)",
      [name, age, country, position, salary],
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          res.send("Data inserted into table");
        }
      }
    );
  }
});

app.get("/project", (req, res) => {
  db.query("SELECT * FROM project", (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
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

app.get("/expense", (req, res) => {
  db.query("SELECT * FROM expense", (error, result) => {
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

app.post("/login", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  console.log(username);

  db.query(
    "SELECT username, password FROM user WHERE username = '" + username +"'",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        if (password === result.rows[0]["password"]) {
          let data = {
            username: result.rows[0]["username"],
            name: result.rows[0]["name"],
          };
          res.status(200).send(data);
        } else {
          res.status(404).send(result);
        }
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running");
});
