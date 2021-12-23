function exponencial(num1,num2){
    let exponente=1    
    for (let i = 0; i < num2; i++) {
        exponente*=num1
    }
    return exponente;
}

let a = prompt("Ingrese la base ")
a = Number(a)
let b = prompt("Ingrese el exponente")
b = Number(b)
document.write(`El resultado de la exponencial es: ${exponencial(a,b)}`)