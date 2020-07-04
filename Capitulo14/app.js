var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configura para ler dados do POST por form-urlencoded e application/json
// Configura para aceitar requisições com conteúdo de 10 MB
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(bodyParser.json());

// middleware  para interceptar a request e mostrar a data atual
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// Permite utilizar arquivos estáticos na pasta view
app.use(express.static(__dirname + '/view'));

// Rota na raiz.
app.get('/', function (req, res) {
	res.send("API dos Carros");
})

// Rotas
app.use('/api', require('./routes/carros'));
app.use('/api/upload', require('./routes/upload'));

// Teste de Erro
app.get('/teste_erro', function (req, res) {
	throw Error('Erro Ninja');
})

// Rota para não encontrado '404'
app.use(function(req, res, next) {
  res.status(404)
  res.json({ err: "Não encontrado." });
});

// Rota para não encontrado '404'
app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
});

// Rota genérica de erro '500'
app.use(function(err, req, res, next) {
    //console.log(err)
	res.status(500);
  	res.json({ erro: 'Erro na transação' });
});

// Inicia o servidor
var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Servidor iniciado em http://%s:%s", host, port)
})
