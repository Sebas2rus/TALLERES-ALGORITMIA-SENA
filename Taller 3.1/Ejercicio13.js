let vector = [],suma=[],sumas=0,iterador=0,producto=[],productos=1,iteradori
 
for (let i = 0; i < 30; i++) {
    vector[i]=Math.round(Math.random()*(1,100))
    if (vector[i]%2==0) {
        suma[iterador]=vector[i]
        sumas+=vector[i]
        iterador++
    }
    if (vector[i]%5==0) {
        producto[iteradori]=vector[i]
        productos*=vector[i]
        iteradori++
    }
}
document.write(`El resultado de los numeros pares es: ${sumas}`)
console.log(suma);
document.write(`El resultado del producto de los multipos de 5 es: ${productos}`)
console.log(producto);
