// Carrega o módulo http
var http = require('http');

// Cria um servidor HTTP que var responder "Hello World" para todas as requisições
var server = http.createServer(function (request, response) {
    // Define o cabeçalho (header) com o tipo de resposta
    response.writeHead(200, {"Content-Type": "text/plain"});

    // Mensagem de retorno
    response.end("Hello World Node!\n");
});

//Porta que o servidor vai escutar 
server.listen(3000);

// Mensagem ao iniciar o servidor 
console.log("Servidor iniciado emm http://localhost:3000/");