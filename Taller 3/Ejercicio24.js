let parciales=0
for (let i = 1; i <=3; i++) {
    let parcial = prompt(`Ingrese la nota del ${i} parcial`)
    parcial = Number(parcial)
    parciales=parcial+parciales
}
parciales=parciales/3
let final = prompt("Ingrese el valor de la nota final")
final = Number(final)
let trabajo = prompt("Ingrese la nota del examen final")
trabajo=Number(trabajo)
document.write(`La nota final de la materia es : ${(parciales*0.55)+(final*0.3)+(trabajo*0.15)}`)