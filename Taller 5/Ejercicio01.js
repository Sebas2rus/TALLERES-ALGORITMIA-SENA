let matriz = []

for (let i = 0; i < 2; i++) {
    matriz[i]=new Array()    
    for (let j = 0; j < 2; j++) {
        matriz[i][j]= prompt(`Ingrese la posicion [${i}][${j}]`)
        
    }
    console.log(matriz[i]);    
}

let temp = matriz[0][1]
matriz [0][1]=matriz[1][0]
matriz[1][0]=temp

console.log(`[${matriz[0]}] [${matriz[1]}]`);
