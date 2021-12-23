let seleccion,i=0,
 datos = [[],[],[],[]],
 total=0,ahorros=500,corriente =700,aporteA=0,aporteC=0,retiroA=0,retiroC=0,promedio =0
do {
    
// Almacenamos todos los datos en el vector datos [cc,nombre,precedencia(At,Dt,Pg)]


datos[i][0] = prompt("Cod Cliente")
datos[i][1] = prompt("Tipo de cuenta: A->Ahorros C->Corriente")
datos[i][2]=prompt("Operacion: A->Aporte R->Retiro")

if (datos[i][1]=="a"||datos[i][1]=="A") {
    if(datos[i][2]=="a" ||datos[i][2]=="A"){
        let aporte = Number(prompt("De cuanto quiere que sea el aporte"))
        ahorros+=aporte
        aporteA+=aporte
    }else if(datos[i][2]=="r" ||datos[i][2]=="R"){
        let retiro = Number(prompt("De cuanto quiere que sea el retiro"))
        ahorros-=retiro
        retiroA-=retiro

    }
}else if(datos[i][1]=="c"||datos[i][1]=="C"){
    if(datos[i][2]=="a" ||datos[i][2]=="A"){
        let aporte = Number(prompt("De cuanto quiere que sea el aporte"))
        corriente+=aporte
        aporteC+=aporte
    }else if(datos[i][2]=="r" ||datos[i][2]=="R"){
        let retiro = Number(prompt("De cuanto quiere que sea el retiro"))
        corriente-=retiro
        retiroC-=retiro
    }
}

    i++
    seleccion = prompt("1.para ingresar otra estudiante")
} while (seleccion==1);

document.write(`El aporte en ahorros es: ${aporteA}, El monto total de retiro en corriente es: ${retiroC}, El Promedio de Retiro en Ahorro es: ${retiroA/i}`)
