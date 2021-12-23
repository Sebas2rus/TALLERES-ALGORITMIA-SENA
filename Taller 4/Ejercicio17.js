
let Sebastian = {
    0: 5,
    1: 4.5,
    2: 4,
    3: 1
}
let Maribel = {
    0: 1,
    1: 4.5,
    2: 4,
    3: 1
}
let Andrea = {
    0: 5,
    1: 4,
    2: 4,
    3: 1
}
let Andres = {
    0: 5,
    1: 4.5,
    2: 3,
    3: 1
}

let matriz = [Sebastian, Maribel, Andrea, Andres]

let eleccion = prompt("De quien desea conocer las notas, el promedio Sebastian,Maribel,Andres,Andrea")

switch (eleccion) {    
    case "Sebastian":
        promedio(0)
        break;
    case "Maribel":
        promedio(1)
        break;
        case "Andrea":
        promedio(2)
        break;
    case "Andres":
        promedio(3)
        break;
    default:
        break;
}



function promedio(nombre) {
    let prom = 0
    for (let i = 0; i < 4; i++) {
        prom += matriz[nombre][i];
    }
    document.write(`El promedio de la materia es: ${(prom/4).toFixed(1)}`)
}
