let vector = [20]
let incremento=1

for (let i = 0; i <20; i++) {    
    vector[i]=incremento
    document.write(`|${vector[i]}|`)
    incremento+=2   
}