let notas = prompt("Cuantas notas desea ingresar")
let ganadas,perdidas

for (let i = 0; i < notas; i++) {
    let nota = prompt("Cual fué su nota")

    if (nota>=5) {
        ganadas++
    }else{
        perdidas++
    }
    document.write(`El numero de notas ganadas son: ${ganadas}`)
    document.write(`El numero de notas perdidas son: ${perdidas}`)
    
}