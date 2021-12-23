function reverse (text){
    return text.split("").reverse().join("")
}
let texto = prompt("Ingrese una cadena de texto")

let textReverse = reverse(texto)

for (let i = 0; i < texto.length && textReverse.length; i++) {
    if (texto.charAt(i)==" ") {
        texto = texto.replace(" ", "")
    }
    if (textReverse.charAt(i)==" " ) {
        textReverse = textReverse.replace(" ", "")
    }
}

console.log(texto);
console.log(textReverse);
if (texto==textReverse) {
    document.write("Los textos se leen igual de derecha a izquierda")
}else{
document.write("Los textos NO se leen igual de derecha a izquierda")
}