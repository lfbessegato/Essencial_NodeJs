function soma(a, b){
    return a + b;
}

function multiplicacao(a, b){
    return a * b;
}

// Esta função recebe outra função como parâmetro
function executar(funcao, a, b) {
    return funcao(a,b);
}

// A função soma() será executada
let resultado = executar(soma, 1,2);


// Imprimir 3
console.log(resultado);