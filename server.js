const express = require("express");
const connect = require('./db/connection');

const routes = require("./routes/router");

const port = 3000;
const app = express();

app.use(express.json());
app.use("/api/v1",routes);

app.listen(port, () => {
connect;
  console.log("Server Running on " + port);
});

// app.use("/api/v1")
