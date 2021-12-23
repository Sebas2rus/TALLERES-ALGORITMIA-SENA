let matriz = new Array(4),diagonal=0

for (let i = 0; i < 4; i++) {
    matriz[i]=new Array(4)
    for (let j = 0; j < 4; j++) {
        matriz[i][j]=Math.round(Math.random()*(100))        
        if (i==j) {
            diagonal+=matriz[i][j]
        }
    }
}
document.write(`El resultado de la suma es: ${diagonal}`)