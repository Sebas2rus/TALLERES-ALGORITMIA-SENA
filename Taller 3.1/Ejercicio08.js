let vector1 = [20]
let incremento=1

for (let i = 0; i <20; i++) {    
    vector1[i]=incremento    
    incremento+=2   
}

let vector2 = [15]

let j = 2, i = 0
while (j <= 30) {
    vector2[i] = [j]
    i++
    j += 2
}

let vector3 = [10]
vector[0]=1

let j = 3, i = 1
while (j <= 30) {
    vector3[i] = [j]    
    i++
    j += 3
}

document.write(`El vector 1 corresponde a: ${vector1}`)
document.write(`El vector 2 corresponde a: ${vector2}`)
document.write(`El vector 3 corresponde a: ${vector3}`)