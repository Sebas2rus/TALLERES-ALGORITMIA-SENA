let seleccion = 0, a = [], b = [],
    materias = [m = ["Matematicas"], i = ["Ingles"], a = ["Algoritmos"], d = ["Desarrollo"], e = ["Español"]]

function datosPersonales(diplomado) {

    if (diplomado == "A" || diplomado == "a") {
        a[0] = prompt("Ingrese su nombre")
        a[1] = prompt("Ingrese el documento de identidad")
        a[2] = prompt("Ingrese el código de estudiante")

        a.push(a[2])
    } else if (diplomado == "B" || diplomado == "b") {
        b[0] = prompt("Ingrese su nombre")
        b[1] = prompt("Ingrese el documento de identidad")
        b[2] = prompt("Ingrese el código de estudiante")

        b.push(b[2])
    }


}

function disponible(cc) {
    for (let i = 0; i < 10; i++) {
        if (documentos[i] == cc) {
            return false;
        }
    }
}

do {
    seleccion = Number(prompt("Menú\n1.incribirse\n2.Inscribir asignaturas\n3.Generar lista de inscritos\n4.Datos de nuevas inscripcciones\n5.Salir"))

    switch (seleccion) {
        case 1:
            diplomado = prompt("A que diplomada se desea inscribir A or B?")
            datosPersonales(diplomado);

            break;
        case 2:
            let continuar = 0;
            for (let i = 0; i < materias.length; i++) {
                console.log(i + "." + materias[i]);
            }
            do {
                let materia = Number(prompt("Ingrese un numero para seleccionar en que materia se desea inscribir"))
                let documento = prompt("Ingrese su numero de documento")

                if (disponible(documento) == false) {
                    alert("Este documento ya ha sido registrado")
                } else {
                    materias[materia].push(documento)
                }
                continuar = Number(prompt("1.Para continuar"))
            } while (continuar == 1);
            break;
        case 3:
            console.log(`Inscritos diplomado "a": ${a}`);
            console.log(`Inscritos diplomado "b": ${b}`);
            console.log(`Inscritos Matematicas: ${m}`);
            console.log(`Inscritos Ingles: ${i}`);
            console.log(`Inscritos Desarrollo: ${d}`);
            console.log(`Inscritos Programacion: ${p}`);
            console.log(`Inscritos Español: ${e}`);
            

            break;
     
        case 5:

            break;
        default:
            break;
    }
} while (seleccion != 4);