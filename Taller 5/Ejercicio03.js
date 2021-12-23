let a = [[2, 2, 3], [4, 5, 6], [7, 8, 9]],
    aT = [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
    aAdj = [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
    temp,
    aInversa = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

for (let i = 0; i < 3; i++) {
    a[i] = new Array()
    for (let j = 0; j < 3; j++) {
        a[i][j] = Number(prompt(`Ingrese un numero posicion [${i}] [${j}]`)) 
       
    }
}

//Creamos la transpuesta de
aT = a

temp = aT[0][1]
aT[0][1] = aT[1][0]
aT[1][0] = temp

temp = aT[0][2]
aT[0][2] = aT[2][0]
aT[2][0] = temp

temp = aT[1][2]
aT[1][2] = aT[2][1]
aT[2][1] = temp

console.log(aT[0], aT[1], aT[2]);

//Calculamos la adjunta de la matriz transpuesta

aAdj[0][1] = ((aT[1][0] * aT[2][2]) - (aT[2][0] * aT[1][2]))
aAdj[0][0] = ((aT[1][1] * aT[2][2]) - (aT[2][1] * aT[1][2])) * -1
aAdj[0][2] = ((aT[1][0] * aT[2][1]) - (aT[2][0] * aT[1][1])) * -1

aAdj[1][0] = ((aT[0][1] * aT[2][2]) - (aT[2][1] * aT[0][2]))
aAdj[1][1] = ((aT[0][0] * aT[2][2]) - (aT[2][0] * aT[0][2])) * -1
aAdj[1][2] = ((aT[0][0] * aT[2][1]) - (aT[2][0] * aT[0][1]))

aAdj[2][0] = ((aT[0][1] * aT[1][2]) - (aT[1][1] * aT[0][2])) * -1
aAdj[2][1] = ((aT[0][0] * aT[1][2]) - (aT[1][0] * aT[0][2]))
aAdj[2][2] = ((aT[0][0] * aT[1][1]) - (aT[1][0] * aT[0][1])) * -1

console.log(aAdj[0], aAdj[1], aAdj[2]);

// Calculamos el determinante de la a

let determinante = ((a[0][0] * a[1][1] * a[2][2]) + (a[0][1] * a[1][2] * a[2][0]) + (a[0][2] * a[1][0] * a[2][1])) - ((a[2][0] * a[1][1] * a[0][2]) + (a[2][1] * a[1][2] * a[0][0]) + (a[2][2] * a[1][0] * a[0][1]))

console.log(determinante);

// Dividivso la  adjunta de la transpuesta de la matriz a por el determinante de la matriz a
if (determinante == 0) {
    alert("La matriz inversa no está definida")
} else {

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            aInversa[i][j] = (aAdj[i][j]) / determinante
        }
    }
}
console.log(aInversa[0], aInversa[1], aInversa[2]);

