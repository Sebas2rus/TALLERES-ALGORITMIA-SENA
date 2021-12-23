let eleccion = prompt("Que materia desea verificar\n1.Matematicas\n2.Física\n3.Quimica")

switch (eleccion) {
    case "1":
        promedio(0.9, 0.1);
        break;
    case "2":
        promedio(0.8, 0.2)
        break;
    case "3":
        promedio(0.85, 0.15)
        break;

    default:
        break;
}

function promedio(proExamen, proTareas) {
    let examen = prompt("Ingrese la nota del examen")
    let notaTarea=0;
    for (let i = 1; i <= 3; i++) {
        let tarea = prompt(`Ingrese la nota de la tare ${i}`);
        tarea = Number(tarea)
        notaTarea = tarea + notaTarea
    }
    notaTarea = notaTarea / 3

    document.write(`La nota final es ${(examen * proExamen) + (notaTarea * proTareas)}`)
}