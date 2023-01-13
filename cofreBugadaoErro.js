const input = "cubos\newvelrabsocaeln";

const linhas = input.trim().split("\n");
let senha = linhas[0].split("");
let digitado = linhas[1].split("");

let atual = 0;
let prox = 0;

let charNumber1;
let charNumber2;
let confere = true;
let tamanho = senha.length;

while (atual < tamanho) {
    charNumber1 = digitado.indexOf(senha[atual])

    while (prox < tamanho) {
        charNumber2 = digitado.indexOf(senha[prox])

        console.log(charNumber1, charNumber2)

        if (charNumber1 > charNumber2) {
            confere = false
            break
        }
        prox++
    }
    prox = 0;
    senha.shift();
    tamanho = senha.length;
}

let resposta = confere ? "SIM" : "NAO";

console.log(resposta)


