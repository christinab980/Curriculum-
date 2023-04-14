const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.json({message: "Hello Worlds."});
});

server.listen (8080, () => {
  console.log('The server is running at PORT 8080')
})