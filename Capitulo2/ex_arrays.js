function testeArray() {
    var numeros = [1, 2, 3];
    numeros.push(4); // Adciona o número 4
    numeros.push(5); // Adciona o número 5
    for (let i = 0; numeros.length > i; i++){
        console.log(numeros[i]); // Imprime cada item do array
    }

    // Exemplo de utilizar a palavra in para percorrer o Array
    console.log("Exemplo de utilizar a palavra in para percorrer o Array");
    for (let i in numeros) {
        console.log(numeros[i]);
    }

     // Exemplo de utilizar map para percorrer o Array
     console.log("Exemplo de utilizar map para percorrer o Array, onde faz um filtro e a variavel n é cada elemento");
     numeros.map(n => { 
        console.log(n);
     })
}

testeArray();