//Esta função recebe outra função como parâmetro
function executar (funcao, a, b){
    return funcao(a, b);
}

var funcao = function(a,b) { return a + b};
let resultado = executar(funcao, 1,2);
// Imprime 3
console.log(resultado);