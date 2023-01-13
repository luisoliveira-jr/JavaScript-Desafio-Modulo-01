let cartaParaCima = "3";

function solucao(carta) {

    let cartas = ["Q", "J", "K", "A", "2", "3"];
    let manilha;
    let indice = 0;

    carta = carta.toUpperCase()

    for (let compare of cartas) {

        if (indice == (cartas.length - 1)) {
            if (compare === carta) {
                manilha = cartas[0]
            }
        }

        if (indice < (cartas.length - 1)) {
            if (compare === carta) {
                manilha = cartas[indice + 1]
            }
        }

        indice++
    }
    console.log(manilha)
}

solucao(cartaParaCima)
