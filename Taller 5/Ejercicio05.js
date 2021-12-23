let a = [[1, 1, 1, 2], [3, -2, -1, 4], [-2, 1, 2, 2]]

//Multiplicamos la primera fila para calcular la resta
if (a[1][0] > 0 && a[0][0] > 0 || a[1][0] < 0 && a[0][0] < 0) {
    for (let j = 0; j < 4; j++) {
        a[0][j] *= a[1][0] * (-1)
    }
} else {
    for (let j = 0; j < 4; j++) {
        a[0][j] *= a[1][0]
    }
}

// Restamos la primera fila con la segunda fila

for (let i = 0; i < 4; i++) {
    a[1][i] += a[0][i]
}

// Multiplicamos por la segunda fila
let aux = a[0][0] * (-1)
if (a[2][0] > 0 && a[0][0] > 0) {
    for (let j = 0; j < 4; j++) {
        a[0][j] *= a[2][0] * (-1)
    }
} else {
    for (let j = 0; j < 4; j++) {
        a[0][j] *= a[2][0]
    }
}


if (a[2][0] > 0 && a[0][0] > 0) {
    for (let j = 0; j < 4; j++) {
        a[2][j] *= aux * (-1)
    }
} else {
    for (let j = 0; j < 4; j++) {
        a[2][j] *= aux

    }
}

// Restamos la primera fila con la segunda fila

for (let i = 0; i < 4; i++) {
    a[2][i] += a[0][i]
}

//Multiplicamos la fila 2 por la 3
aux = a[1][1] * (-1)
if (a[1][1] > 0 && a[2][1] > 0) {
    for (let j = 0; j < 4; j++) {
        a[1][j] *= a[2][1] * (-1)
    }
} else {
    for (let j = 0; j < 4; j++) {
        a[1][j] *= a[2][1]
    }
}


if (a[1][1] > 0 && a[2][1] > 0) {
    for (let j = 0; j < 4; j++) {
        a[2][j] *= aux * (-1)
    }
} else {
    for (let j = 0; j < 4; j++) {
        a[2][j] *= aux

    }
}

// Restamos la primera fila con la segunda fila

for (let i = 0; i < 4; i++) {
    a[2][i] += a[1][i]
}



console.log(a[0], a[1], a[2]);

let x,y,z
z=a[2][3]/a[2][2]
y=((-1*a[1][3])+(a[1][2]*z))/a[1][1]
x=((a[0][3])-(a[0][1]*y)-(a[0][2]*z))/a[0][0]


document.write(`El valor de "X" es : ${x}, El valor de "Y" es: ${y}, El valor de "Z" es: ${z} `)

console.log(a[0],a[1]);