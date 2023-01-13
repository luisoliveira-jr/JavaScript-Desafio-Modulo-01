let numero = 10;
let lInf = 5;
let lSup = 20;


function analise(numero, limiteInferior, limiteSuperior) {

    let resultado;

    if (numero >= limiteInferior && numero <= limiteSuperior) {
        resultado = "PERTENCE"
    } else {
        resultado = "NAO PERTENCE"
    }

    console.log(resultado)
}

analise(numero, lInf, lSup)