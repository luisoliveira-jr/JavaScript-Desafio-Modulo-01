const input = "3\n0 0\n0 3\n4 0";

const linhas = input.trim().split("\n");
const n = Number(linhas[0]);

const coordenadas = [];

for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: Number(coord[0]),
        y: Number(coord[1])
    })
}

let indice = 0;
let pontoDois = 0;
let abX = 0;
let abY = 0;

let distancia = 0;
let maiorDistancia = 0;

while (indice < n) {
    while (pontoDois < n) {
        abX = Math.pow((coordenadas[indice].x - coordenadas[pontoDois].x), 2);
        abY = Math.pow((coordenadas[indice].y - coordenadas[pontoDois].y), 2);
        distancia = Math.sqrt((abX + abY));
        if (distancia > maiorDistancia) {
            maiorDistancia = distancia
        }
        pontoDois++
    }
    pontoDois = 0;
    indice++
}

console.log(maiorDistancia)