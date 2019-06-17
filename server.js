const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB initialize
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
  console.log('MongoDB Connected')
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
})