let express = require('express');
let app = express();

// Permite ler os parâmetros do tipo form-urlencoded
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Para receber um JSON
app.use(bodyParser.json())

// Configura uma rota na raiz
app.get('/', function(req, res){
    res.send("Hello World Express");
});

// Configura para retornar JSON
app.get('/JSON', function(req,res){
    res.json({nome:'Luciano', sobrenome:'Bessegato'})
});

// Configura para retornar JSON, configurando mensagem
app.get('/erro', function(req,res){
    res.status(500);
    res.json({msg:'Oooops, não foi possível atender esta requisição.'})
});

// Configura a rota para acessar Tipo Query Parameters
//GET
app.get('/pessoa', function(req,res){
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type("text");
    res.send(nome + " " + sobrenome);
});

// Configura a rota para acessar Tipo Path Parameters
app.get('/pessoa/:id', function(req, res){
    let id = req.params.id;
    res.send("Buscar a pessoa: " + id);
});

app.get('/pessoa/nome/:nome/sobrenome/:sobrenome', function(req, res){
    let nome = req.params.nome;
    let sobrenome = req.params.sobrenome;
    res.send(nome + " " + sobrenome);
});

// LER parametros do tipo chave=valor por POST (bodyParser)
//POST
app.post('/pessoa', function(req,res){
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    res.status(200).type("text");
    res.send(nome + " " + sobrenome);

    // Testa o valor do cabeçalho content-type
    if ( req.is("json")) {
        // Se for JSON
        res.json({nome: nome, sobrenome: sobrenome});
    } else {
        // Caso contrário envia o como texto (text/plain)
        res.type("text").send("texto: " + nome + " " + sobrenome);
    }
});

// Inicia o servidor
let server = app.listen(3000, function(){ 
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://%s:%s", host, port)
});