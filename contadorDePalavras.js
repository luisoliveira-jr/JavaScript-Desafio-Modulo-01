let texto = "Cuidado, pois usuarios  as vezes deixam espacos vazios no fim do texto sem querer ";

function solucao(texto) {

    const palavras = texto.trim().split(" ");

    let contador = 0;

    for (let palavra of palavras) {
        if (palavra != "") {
            contador++
        }
    }
    console.log(contador)

}

solucao(texto)
