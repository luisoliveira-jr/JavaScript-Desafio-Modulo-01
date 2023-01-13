let lista = [2, 3, 4];

let totalAcumulado = 0;


for (let valor of lista) {
    totalAcumulado = totalAcumulado + valor;
}

let media = totalAcumulado / lista.length;

console.log(media)