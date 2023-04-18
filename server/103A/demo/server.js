const express = require('express')
const cookieParser = require('cookie-parser');

const server = express();

server.use(express.json());
server.use(cookieParser());

server.get('/', (req, rest) => {
  res.json({message: 'You are at the root'})
});

server.post('/body', (req, rest) => {
  console.log('body', req.body);
  res.json({message: 'You are at the /body'})
});

server.get('/cookies', (req, rest) => {
  console.log('cookies', req.cookies);
  res.json({message: 'You are at the /cookies'})
});

server.get('/params/:someRoute', (req, rest) => {
  console.log('params', req.params);
  res.json({message: 'You are at the /params'})
});

server.get('/query', (req, rest) => {
  console.log('query', req.query);
  res.json({message: 'You are at the /query'})
});

server.listen(8080, () =>
  console.log('The server is running at PORT 8080')
)