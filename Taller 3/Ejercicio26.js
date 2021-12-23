let seleccion = true, numeros = 0, acumulador = 0;

while (seleccion) {
    let numero = prompt("ingrese el valor")
    numero = Number(numero)

    if (numero >= 0) {
        numeros = numero + numeros
        acumulador++
    } else {
        seleccion = false
    }
}
document.write(`La media de los valores ingresados es: ${numeros / acumulador}`)