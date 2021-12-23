let factorial = prompt("Ingrese un valor para calcular su factorial")
factorial=Number(factorial)
for (let i = 1; i <= factorial; i++) {
    factorial=factorial*i
}
document.write(factorial)
console.log(factorial)