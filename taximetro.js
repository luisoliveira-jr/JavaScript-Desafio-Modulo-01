let min = 25;
let km = 11.5;

function solucao(min, km) {

    let tempoB1 = 20;
    let distanciaB1 = 10;

    let precoMinB1 = 50;
    let precoMinb2 = 30;
    let minDiferenca;

    let precoDistB1 = 70;
    let precoDistB2 = 50;
    let kmDiferenca;

    let totalTempoB1 = tempoB1 * precoMinB1;
    let totalDistanciaB1 = distanciaB1 * precoDistB1;

    let custoTempo = 0;
    let custoDistancia = 0;
    let valorAPagar = 0;

    if (min <= tempoB1) {
        custoTempo = min * precoMinB1
    } else {
        minDiferenca = min - tempoB1;
        custoTempo = totalTempoB1 + (minDiferenca * precoMinb2)
    }

    if (km <= distanciaB1) {
        custoDistancia = km * precoDistB1
    } else {
        kmDiferenca = km - distanciaB1;
        custoDistancia = totalDistanciaB1 + (kmDiferenca * precoDistB2)
    }

    valorAPagar = custoTempo + custoDistancia;
    console.log(valorAPagar)

}

solucao(min, km)

