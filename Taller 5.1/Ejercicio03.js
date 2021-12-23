let a = [[6,1],[8,-2]], b= [[7,-2],[-1,4]], c = [[],[]]

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        c [i][j] = a[i][j]+b[i][j]
    }
}

console.log(c[0], c[1]);