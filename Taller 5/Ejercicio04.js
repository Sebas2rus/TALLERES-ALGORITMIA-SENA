let a = [[1,2],[2,3]],
 b = [[4,5],[6,7]],
 c=[[1,1],[1,1]]

for (let i = 0; i < 2; i++) {
    a[i] = new Array()
    for (let j = 0; j < 2; j++) {
      a[i][j] = Number(prompt(`Ingrese un numero posicion [${i}] [${j}]`))        
    }
}
for (let i = 0; i < 2; i++) {
    b [i] = new Array()
    for (let j = 0; j < 2; j++) {
       b [i][j] = Number(prompt(`Ingrese un numero posicion [${i}] [${j}]`))        
    }
}

// Se realiza el producto y se guarda en la nueva matriz

c[0][0]=(a[0][0]*b[0][0])+(a[0][1]*b[1][0])
c[0][1]=(a[0][0]*b[0][1])+(a[0][1]*b[1][1])

c[1][0]=(a[1][0]*b[0][0])+(a[1][1]*b[1][0])
c[1][1]=(a[1][0]*b[0][1])+(a[1][1]*b[1][1])

console.log(c[0], c[1]);

