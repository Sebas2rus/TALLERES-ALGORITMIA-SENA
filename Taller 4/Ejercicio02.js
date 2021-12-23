function vectorial(num1) {
    let factorial=1
    for (let i = 1; i <=num1; i++) {
     factorial*=i
     
    }
    return factorial;
}

let num = prompt("Ingrese el valor del factorial")

document.write(`El resultado del factorial es: ${vectorial(num)}`)
console.log()