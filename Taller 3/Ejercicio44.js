let vector = [50]
let mayores = 0, promedio = 0,j=0
let vector2=[promedio]

for (let i = 0; i < 50; i++) {
    vector[i] = Math.round(Math.random() * (0, 100))
    promedio = vector[i] + promedio
}
promedio=Math.round(promedio/100)

for (let i = 0; i < 50; i++) {
    if (vector[i] > promedio) {
        
        mayores++
        vector2[j]=vector[i]
        j++
    }
}

document.write(`Los numeros por encima del promedio son: ${mayores}   `)
document.write(`El promedio es: ${promedio}   `)
document.write(`Los numeros por encima del promedio son: ${vector2} `)
