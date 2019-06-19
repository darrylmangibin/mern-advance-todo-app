const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

// MongoDB
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log(`MongoDB Connected`)
}).catch(() => {
  console.log('Connection failed')
})

// ROUTE
const todos = require('./routes/api/todos');
app.use('/api/todos', todos);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})