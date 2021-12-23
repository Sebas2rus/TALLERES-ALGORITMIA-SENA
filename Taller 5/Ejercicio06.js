let seleccion,i=0,
 datos = [[],[]]
do {
    
// Almacenamos todos los datos en el vector datos


datos[i][0] = prompt("Cual es su nombre")
datos[i][1] = prompt("Que tipo de cable desea comprar A or B")
datos[i][2]= Number(prompt("Cuantos metros desea comprar ?"))


console.log(typeof(datos[i][2]));

if(datos[i][1]=="A" ||datos[i][1]=="a"){
    if (datos[i][2]>100) {
        datos[i][3]=datos[i][2]*200*0.9
    } else {
        datos[i][3]=datos[i][2]*200
    }
}else if (datos[i][1]=="B" || datos[i][1]=="b"){
    if (datos[i][2]>100) {
        datos[i][3]=datos[i][2]*300*0.9
    } else {
        datos[i][3]=datos[i][2]*300
    }
}
    i++
    seleccion = prompt("1.para ingresar otra compra")
} while (seleccion==1);

for (let i = 0; i < datos.length; i++) {
    console.log(`Nombre: ${datos[i][0]} Precio: ${datos[i][3]}`);
}




