const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "18.141.160.235",
  port: "3306",
  user: "root",
  password: "password",
  database:"dbs",
  idleTimeoutMillis: 100,
  connectionTimeoutMillis: 100,
});

const app = express();
const port = process.env.PORT || 5000;

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/hello2', (req, res) => {
  con.connect();
  con.query('SELECT * FROM test', function (error, results, fields) {

  });
  con.end();
  // console.log(res)
  // res.send({ express: res });
});

app.listen(port, () => console.log(`Listening on port ${port}`));