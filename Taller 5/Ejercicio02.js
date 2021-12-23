let matriz = [[1,2,3],[4,5,6],[7,8,9]]
let matrizAdjunta = [[1,1,1],[1,1,1],[1,1,1]]

for (let i = 0; i < 3; i++) {
    matriz[i] = new Array()
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(prompt(`Ingrese un numero posicion [${i}] [${j}]`))
       
    }
}

matrizAdjunta[0][0]= ((matriz[1][1]*matriz[2][2])-(matriz[2][1]*matriz[1][2]))*-1
matrizAdjunta[0][1]= ((matriz[1][0]*matriz[2][2])-(matriz[2][0]*matriz[1][2]))
matrizAdjunta[0][2]= ((matriz[1][0]*matriz[2][1])-(matriz[2][0]*matriz[1][1]))*-1

matrizAdjunta[1][0]= ((matriz[0][1]*matriz[2][2])-(matriz[2][1]*matriz[0][2]))
matrizAdjunta[1][1]= ((matriz[0][0]*matriz[2][2])-(matriz[2][0]*matriz[0][2]))*-1
matrizAdjunta[1][2]= ((matriz[0][0]*matriz[2][1])-(matriz[2][0]*matriz[0][1]))

matrizAdjunta[2][0]= ((matriz[0][1]*matriz[1][2])-(matriz[1][1]*matriz[0][2]))*-1
matrizAdjunta[2][1]= ((matriz[0][0]*matriz[1][2])-(matriz[1][0]*matriz[0][2]))
matrizAdjunta[2][2]= ((matriz[0][0]*matriz[1][1])-(matriz[1][0]*matriz[0][1]))*-1

console.log(matrizAdjunta[0], matrizAdjunta[1], matrizAdjunta[2]);