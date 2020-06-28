// Carrega os módulos
var http = require('http');
var url = require('url');

// Função de callback para o servidor HTTP
function callback(request, response){
    // Faz o parser da URL separando o caminho (path)
    var parts = url.parse(request.url);
    var path = parts.path;

    // Verifica o path
    // Configura o tipo do conteúdo de retorno para JSON
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});

    if (path == '/teste') {
        //response.end("Vamos estudar JSON!");
        //response.end("{\"nome\":\"Ricardo\",\"sobrenome\":\"Lecheta\"}");

        // Cria um array em JavaScript
        var pessoas = [];

        // Classe Pessoa
        var Pessoa = class {
            constructor(nome, sobrenome){
                this.nome = nome;
                this.sobrenome = sobrenome;
            }
        };

        // Cria duas pessoas
        var p1 = new Pessoa('Luciano','Bessegato');
        var p2 = new Pessoa('Ricardo', 'Lecheta');

        // Adiciona os objetos no array
        pessoas.push(p1);
        pessoas.push(p2);

        // Converte o objeto para string no formato JSON
        var json = JSON.stringify(pessoas);

        // Escreve o JSON na resposta(response) da requisição HTTP
        response.end(json);
    } else {
        response.end("Not found: " + path);
    }
}

// Cria um servidor HTTP que vai responder "Hello World" para todas as requisições
var server = http.createServer(callback);

// Porta que o servidor vai escutar
server.listen(3000);

// Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");