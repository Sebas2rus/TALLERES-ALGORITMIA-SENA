let matriz = new Array(4);

for (let i = 0; i < 4; i++) {
    matriz[i] = new Array(3)
    for (let j = 0; j < 4; j++) {
        if (i == j) {
            matriz[i][j] = 1
            // matriz[i][j]=Math.round(Math.random()*(100)  ) 
        } else {
            matriz[i][j] = 0
        }
    }
}
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(matriz[i][j]);  
    }
}
