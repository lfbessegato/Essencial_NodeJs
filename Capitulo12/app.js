let express = require('express');
let app = express();

let bodyParser = require('body-parser');

// Configura para ler dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.use('/api/carros', require('./routes/carros'));

// Teste de Erro
app.get('/teste_erro', function(req, res){
    throw Error('Erro Ninja');
});

// Rota para não encontrado '404'
app.use(function(req, res, next){
    res.status(404);
    res.json( { err: "Não encontrado" } )
    //let err = new Error('Não encontrado');
    //err.status = 404;
    //next(err);
});

// Rota genérica de erro '500'
app.use(function(err, req, res, next){
    // Imprime a stacktrace do erro no console para debug
    console.error(err.stack);
    res.status(500);
    res.json( { erro: "Ocorreu um erro: " + err.message } );
});

// Inicia o servidor 
let server = app.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("'Servidor iniciado em http://%s:%s", host, port);
});

