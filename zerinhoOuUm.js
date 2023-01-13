let jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores) {

    let zero = 0;
    let um = 0;

    for (let pessoa of jogadores) {
        if (pessoa.jogada === 1) {
            um++
        } else if (pessoa.jogada === 0) {
            zero++
        }
    }

    if (zero === 1) {
        for (let pessoa of jogadores) {
            if (pessoa.jogada === 0) {
                console.log(pessoa.nome)
            }
        }
    } else if (um === 1) {
        for (let pessoa of jogadores) {
            if (pessoa.jogada === 1) {
                console.log(pessoa.nome)
            }
        }
    } else {
        console.log("NINGUEM")
    }

}

solucao(jogadores)

