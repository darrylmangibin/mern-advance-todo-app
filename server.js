const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(cors());
app.options('*', cors());

// MongoDB Config
const db = process.env.DATABASE;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log(`MongoDB Connected`))
  .catch(() => console.log('Connection Failed'))
mongoose.set('useCreateIndex', true);
// ROUTES
const todos = require('./routes/api/todos');
app.use('/api/todos', todos);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})