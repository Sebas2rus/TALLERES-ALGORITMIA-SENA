function mayor (num1,num2){
    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
}

let a = prompt("Ingrese el primer numero")
let b = prompt("Ingrese el segundo numero")
document.write(`El mayor de los dos numeros es: ${mayor(a,b)}`)
