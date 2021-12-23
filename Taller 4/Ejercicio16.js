
let n = prompt("Cuantos numeros desea evaluar")
n=Number(n)
let vector = new Array(n),aux=1

for (let i = 0; i < n; i++) {
    vector[i]=Math.round(Math.random()*(100))   
    if (vector[i]>aux) {
        aux=vector[i]
    }
}

document.write(`El numero mayor es: ${aux}`)