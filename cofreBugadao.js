const input = "cubos\newvelrabsocaeln";

const linhas = input.trim().split("\n");
let letra = "";
let index = 0;

for (let item of linhas[1]) {
    if (item == linhas[0][index]) {
        letra += item
        index++
    }

}
if (letra == linhas[0]) {
    console.log("SIM")
} else {
    console.log("NAO")
}