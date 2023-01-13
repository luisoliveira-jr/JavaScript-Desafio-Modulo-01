let lista = [20, 29, 27];

function solucao(lista) {

    let permitidos = [];
    let temGente = false;

    for (let daVez of lista) {
        if (daVez >= 18) {
            permitidos.push(daVez)
            temGente = true
        }
    }

    if (!temGente) {
        console.log("CRESCA E APARECA")
    } else {
        let cacula = permitidos[0];

        for (let daVez of permitidos) {
            if (daVez < cacula) {
                cacula = daVez
            }
        }
        console.log(cacula)
    }
}

solucao(lista)
