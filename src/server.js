var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/tussi', function(req, res, next) {

  res.send([
    'Tussi',
    'Tussittaja',
    'Tussitus',
    'Tussittaa',
  ]);

});

app.get('/api/boards', function(req, res, next) {

  res.send([
    { id: 1, order: 2, name: 'Tussi', items: ['Lipase tussia', 'Losoile']},
    { id: 2, order: 3, name: 'Lusso', items: ['Lipase losoa', 'Tusseile', 'Tusseile', 'Tusseile', 'Tusseile', 'Tusseile', 'Tusseile']},
    { id: 3, order: 1, name: 'Lupsuttele', items: ['Lupso', 'Lopso']},
    { id: 4, order: 4, name: 'Lipaise', items: ['Lupso', 'Lopso']}
  ]);

});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
