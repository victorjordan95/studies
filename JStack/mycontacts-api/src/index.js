const express = require('express');

// const cors = require('./app/middleware/cors');
const cors = require('cors');
const errorHandler = require('./app/middleware/errorHandler');
const routes = require('./routes');

require('express-async-errors');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});
app.use(routes);


app.use(errorHandler);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
