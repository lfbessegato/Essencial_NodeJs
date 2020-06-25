function testeVar() {
    var a = 1;
    var b = 2;
    var soma = a + b;
    var nome = "Luciano";
    console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que", "legal");
}

function testeTiposVar() {
    var a = 1;
    var b = 2;
    var soma = a + b;
    var nome;

    if (nome == undefined) {
        console.log("Teste 1) o nome não foi inicializado.");
    }

    if (typeof(nome) == "undefined") {
        console.log("Teste 2) o nome não foi inicializado.");
    }

    console.log("O tipo do nome é %s e o tipo da soma é %s", typeof(nome), typeof(soma));
    console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que", "legal");
}

//Executa a função testeVar()
testeVar()

// Executa a função testeTipoVar() 
testeTiposVar()
