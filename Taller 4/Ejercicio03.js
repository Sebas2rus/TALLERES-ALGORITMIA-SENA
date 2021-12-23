function mcd(num1,num2) {
    let aux
    while (num2!=0) {
        aux = num2;
        num2=num2%num1
        num1=aux    
    }
    return num1
}

let a = prompt("Ingrese el primer numero")
let b = prompt("Ingrese el segundo numero")
let c = prompt("Ingrese el tercer numero")
let d = prompt("Ingrese el cuarto numero")

let total = mcd(mcd(a,b),mcd(c,d))

document.write(`El MCD de los 4 numero es: ${total}`)