function numero(num1) {
    if (num1>=0 && num1<10) {
        return true;
    }else{
        return false;
    }
}

let numer = prompt("Ingrese un numero")
numer = Number(numer)

document.writeln(`Si su numero está entre 0 y 9 será true de lo contrario false`)
document.write(`Su respuesta es "${numero(numer)}" `)