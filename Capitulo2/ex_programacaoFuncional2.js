//Esta função recebe outra função como parâmetro
function executar(funcao, a,b){
    return funcao(a,b);
}

let resultado = executar( function (a,b) {return a + b}, 1,2);
// Imprime 3
console.log(resultado);