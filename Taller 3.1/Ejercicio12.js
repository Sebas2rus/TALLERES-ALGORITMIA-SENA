let vector = [],suma=[],sumas=0,iterador=0
 
for (let i = 0; i < 20; i++) {
    vector[i]=Math.round(Math.random()*(1,100))
    if (vector[i]%2==0) {
        suma[iterador]=vector[i]
        sumas+=vector[i]
        iterador++
    }
}
document.write(`El resultado de los numeros pares es: ${sumas}`)
console.log(suma);
