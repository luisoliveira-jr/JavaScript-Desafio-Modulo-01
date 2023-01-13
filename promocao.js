let precos = [100, 100, 100]

function solucao(precos) {

    let total = 0;
    let maisBarato = precos[0];
    let desconto = 0;

    if (precos.length >= 3) {
        for (let item of precos) {
            if (item < maisBarato) {
                maisBarato = item
            }
            total = total + item;
        }
        desconto = maisBarato * 0.5;
        total = total - desconto;
        console.log(total)
    } else {
        for (let item of precos) {
            total = total + item;
        }
        console.log(total)
    }

}

solucao(precos)

