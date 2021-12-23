let minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


let texto = prompt("Ingrese el texto")

for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < mayusculas.length; j++) {
        if (texto.charAt(i)==mayusculas[j]) {
            texto=texto.replace(texto.charAt(i),minusculas[j])
        }
    }
}
document.write(`El texto en minusculas es: ${texto} `)

for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < minusculas.length; j++) {
        if (texto.charAt(i)==minusculas[j]) {
            texto=texto.replace(texto.charAt(i),mayusculas[j])
        }
    }
}
document.write(`El texto en mayuscula es: ${texto}`)
