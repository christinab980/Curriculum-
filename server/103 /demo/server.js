const express = require('express')

const server = express();

server.get('/', (req, rest) => {
  res.json({message: 'You are at the root'})
});

server.listen(8080, () =>
  console.log('The server is running at PORT 8080')
)