let notas = prompt("Cuantas notas desea ingresar")
let perdidas=0,ganadas=0,promedio=0,promedioGanadas=0,promedioPerdidas=0

for (let i = 0; i < notas; i++) {
    let nota = prompt("Cual es su notas (Max 5.0) " + (i+1))
    if (nota>=3) {
        promedioGanadas = nota+promedioGanadas;
        perdidas++
    } else if(nota<3){
        promedioPerdidas = nota+promedioPerdidas;
        ganadas++        
    }
    promedio=nota+promedio
}
document.write(`El numero de materias aprobadas es: ${ganadas}`)
document.write(`El numero de materias aprobadas es: ${perdidas}`)
document.write(`El promedio de las notas es: ${promedio/notas}`)
document.write(`El promedio de las materias aprobadas es: ${promedioGanadas/ganadas}. El promedio de las desaprobadas es: ${promedioPerdidas/perdidas} `)