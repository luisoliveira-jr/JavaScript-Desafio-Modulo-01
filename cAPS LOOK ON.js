let string = "CAPS";

let maiusculas = 0;
let minusculas = 0;
let capsLockOn = 0;

let primeriaLetra = "";
let restanteDoNome = "";
let stringCorrigida;



for (let caractere of string) {
    //Verifica maisuculas
    if (caractere.codePointAt() > 64 && caractere.codePointAt() < 91 ||
        caractere.codePointAt() > 191 && caractere.codePointAt() < 222) {
        maiusculas++;
    }

    //Verifica minusculas
    if (caractere.codePointAt() > 96 && caractere.codePointAt() < 123 ||
        caractere.codePointAt() > 223 && caractere.codePointAt() < 255) {
        minusculas++;
    }
}

//Se mais que 70 da string estiver maiuscula, significa que o caps lock esta ativo
capsLockOn = ((100 / string.length) * maiusculas);

if (capsLockOn > 60) {
    primeriaLetra = string.slice(0, 1);
    restanteDoNome = string.slice(1);
    stringCorrigida = primeriaLetra.toUpperCase() + restanteDoNome.toLowerCase();
    stringCorrigida = stringCorrigida.trim();
} else {
    stringCorrigida = string.toLowerCase();
}

console.log(stringCorrigida)