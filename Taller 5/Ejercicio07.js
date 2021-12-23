let seleccion,i=0,
 datos = [[],[]],
 total=0
do {
    
// Almacenamos todos los datos en el vector datos [cc,nombre,precedencia(At,Dt,Pg)]


datos[i][0] = prompt("Cedula de identidad")
datos[i][1] = prompt("Cual es su nombre")
datos[i][2]=prompt("Procedencia (At = Alumno del Tecnológico, Dt = Docente del Tecnológico, Pg = Publico en General) ?")

if(datos[i][2]=="At" ||datos[i][2]=="at"||datos[i][2]=="aT"||datos[i][2]=="AT"){
    total+=10000
}else if (datos[i][2]=="Dt" ||datos[i][2]=="dt"||datos[i][2]=="dT"||datos[i][2]=="DT"){
    total+=20000
}else if (datos[i][2]=="Pg" ||datos[i][2]=="pg"||datos[i][2]=="pG"||datos[i][2]=="PG"){
    total+=35000
}
    i++
    seleccion = prompt("1.para ingresar otra estudiante")
} while (seleccion==1);

document.write(`El dinero recaudado por el curso es: ${total}`)