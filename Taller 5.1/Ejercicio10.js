let matriz =[['x',' ','x',' ',' ',' ',' '],['x','x','x',' ',' ',' ',' '],['x',' ','x',' ',' ',' ',' '],['x',' ','x',' ',' ',' ',' ']]

function avanzar() {
    for (let i = 0; i < 4; i++) {
        
        matriz[i].unshift(" ")
        matriz[i].pop()
    }
}

function mostrar() {
    for (let i = 0; i < 4; i++) {    
        console.log(matriz[i]);
    }
}

for (let i = 0; i < 7; i++) {
    mostrar()
    avanzar()    
    console.log("");
}