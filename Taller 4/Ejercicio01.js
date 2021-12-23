function media(num1,num2,num3) {
    return (num1+num2+num3)/3;  
}

let a = prompt("Ingrese el primer valor")
a = Number(a)

let b = prompt("Ingrese el primer valor")
b = Number(b)

let c = prompt("Ingrese el primer valor")
c = Number(c)

document.write(`La media de los numero es: ${media(a,b,c)}`)