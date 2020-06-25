function objetos1() {
    var pessoa = Object();
    pessoa.nome = "Luciano";
    pessoa.hello = function() {
        return "Hello Pessoal! - Primeira forma";
    }

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

function objetos2() {
    var pessoa = {
        nome : 'Luciano',
        hello: function() {
            return "Hello Pessoal! - Segunda forma separado por {}";
        }
    }

    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

// Sintaxe mais utilizadas
function Pessoa() {
    this.nome = "Luciano";
    this.hello = function() {
        return "Hello Pessoal! - terceira forma classe/Objeto"
    }
}

function objetos3 () {
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

// Sintaxe ECMAScript 2015
class classPessoa {
    constructor() {
        this.nome = "Luciano";
    }
    hello() {
        return "Hello Pessoal! - Quarta forma - Class - ECMA2015"
    }
}

function objetos4() {
    var pessoa = new classPessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}

objetos1();

objetos2();

objetos3();

objetos4();