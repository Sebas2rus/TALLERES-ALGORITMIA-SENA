let vector = [],pares=[], promedio=0,mayor=10, menor=10,j=0
 
for (let i = 0; i < 30; i++) {    
    vector[i]= Math.round(Math.random()*(0,100))
    promedio+=vector[i]
 
    if (vector[i]%2==0) {
        pares[j]=vector[i]
        j++
    }
 
    if(vector[i]>mayor){
    mayor=vector[i]
    }
    if(vector[i]<menor){
        menor=vector[i]
        }
        
}
 
console.log(`El promedio de la matriz es: ${(promedio/30).toFixed(2)}`);
console.log(`Los numeros pares son: ${pares}`);
console.log(`El numero menor es: ${menor} `)
console.log(`El numero mayor es: ${mayor} `)
 
