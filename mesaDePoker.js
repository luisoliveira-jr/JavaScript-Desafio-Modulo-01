let min = 2;
let max = 10;
let valores = [0, 5, 6, 10, 11];

function solucao(min, max, valores) {

    let resultado = [];

    for (let daVez of valores) {
        if (daVez >= min && numero <= max) {
            resultado.push(daVez)
        }
    }
    console.log(resultado)
}

solucao(min, max, valores)
