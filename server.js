const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB CONFIG
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }).then(() => {
  console.log(`MongoDB connected`)
}).catch(() => {
  console.log('Connection failed')
});

// ROUTES
const todos = require('./routes/api/todos');
app.use('/api/todos', todos);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
});