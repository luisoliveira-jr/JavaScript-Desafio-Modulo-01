let numeros = [1, 1, 1]

function solucao(numeros) {

    let somaDosNumeros = 0;

    for (let numero of numeros) {
        somaDosNumeros = somaDosNumeros + numero;
    }

    let indice = 0;
    let ponteiro = 1;

    while (indice < somaDosNumeros) {
        if (ponteiro > numeros.length) {
            ponteiro = 1;
        }
        ponteiro++;
        indice++;
    }
    console.log(ponteiro - 1)

}

solucao(numeros)

