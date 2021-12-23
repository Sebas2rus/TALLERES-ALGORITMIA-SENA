
let consonantes = ["A", "E", "I", "O", "U","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y"]

for (let i = 0; i < consonantes.length; i++) {
    document.write(` ${consonantes[i]}->${i}`)
}

let numero = prompt(`Cuantos letras desea selecionar`)
numero=Number(numero)

while (numero>0) {
    let seleccion = prompt("Elije el numero de la letra que quiere seleccionar")
    seleccion=Number(seleccion)
    console.log(`${consonantes[seleccion]}`)
numero--
}
