function absoluto(num1) {
    if (num1<=0) {
        return num1=num1*-1
    } else {
        return num1
    }
}

let numero = prompt("Ingrese un valor")
numero = Number(numero)
document.write(`El valor absoluto es: ${absoluto(numero)}`)