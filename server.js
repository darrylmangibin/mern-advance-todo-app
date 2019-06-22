const express = require('express');

const app = express();

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
});