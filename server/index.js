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

// req parameter will contain whatever "body data" i sent to the back-end.
// app.post("/expense", (req, res) => {
//   // Replace the variables with the database data variables
//   const { id, user_id, name, description, budget } = req.body;
//   if (!id || !user_id || !name || !description || !budget) {
//     res.status(400).send("Error: missing data");
//   } else {
//     db.query(
//       "INSERT INTO employees (id, user_id, name, description, budget) VALUES (?, ?, ?, ?, ?)",
//       [name, age, country, position, salary],
//       (error, result) => {
//         if (error) {
//           console.log(error);
//         } else {
//           res.send("Data inserted into table");
//         }
//       }
//     );
//   }
// });

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
  db.query("SELECT * FROM user where id=" +req.body.id , (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(result);
    }
  });
});

// app.delete("/expense/:id", (req, res) => {
//   db.query("DELETE FROM expense WHERE id="+req.body.id+"", (error, result) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

// app.put("/expense/:id", (req, res) => {
//   db.query("UPDATE items SET name='"+req.body.name+"', description='"+req.body.description +"' WHERE budget="+req.params.budget , (error, result) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

// app.post("/expense/:id", (req, res) => {
//   // Replace the variables with the database data variables
//   const { id, user_id, name, description, budget } = req.body;
//   if (!id || !user_id || !name || !description || !budget) {
//     res.status(400).send("Error: missing data");
//   } else {
//     db.query(
//       "INSERT INTO expenses (id, user_id, name, description, budget) VALUES ("id + "," + user_id + "," +  name + ","+ description + "," + budget+")",
//       (error, result) => {
//         if (error) {
//           console.log(error);
//         } else {
//           res.send("Data inserted into table");
//         }
//       }
//     );
//   }
// });


app.listen(3001, () => {
  console.log("Server is running");
});
