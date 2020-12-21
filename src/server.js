const express = require('express');
const server = express();
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server.get('/', (req, res) => {
  return res.render('index.html');
});
server.get('/create-point', (req, res) => {
  return res.render('create-point.html');
});
server.get('/search-results', (req, res) => {
    return res.render('search-results.html', { total: 0 });
});

server.listen(3000);