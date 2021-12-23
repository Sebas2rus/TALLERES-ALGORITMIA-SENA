let eleccion = "Y", i = 0
let matriz = [], vector = ["Nombre de la direccion", "Ciudad", "Codigo postal", "Telefono", "Edad"]
while (eleccion == "Y" || eleccion == "y") {
    matriz[i] = new Array()
    matriz[i][0] = prompt("Nombre de la direccion")
    matriz[i][1] = prompt("Ciudad")
    /*matriz[i][2]= prompt("Codigo postal") 
    matriz[i][3]= prompt("Telefono") 
    matriz[i][4]= prompt("Edad") */

    eleccion = prompt("Desea ingresar otra direccion Y or N")
    i++
}


console.log(matriz[0]);

let seleccion = prompt("Que accion desea realizar:\n1.Consultar todas las direcciones\n2.Consultar una direccion\n3.Modificar un elemento");
seleccion=Number(seleccion)
let sel
switch (seleccion) {
    case 1:
        for (let j = 0; j < matriz.length; j++) {
            for (let i = 0; i < 5; i++) {
                document.write(`${vector[i]} : ${matriz[j][i]} - `)
            }
        }
        break;
    case 2: sel = prompt("Que direccion desea consultar, ingrese el numero")
        sel = Number(sel)

        for (let i = 0; i < 5; i++) {
            document.write(`${vector[i]} : ${matriz[sel][i]} - `)
        }

        break;
    case 3: sel = prompt("Que direccion desea modificar, ingrese el numero")
    sel = Number(sel)-1

    let modificacion = prompt("Que desea modificar\n1.Nombre de la direccion\n2.Ciudad\n3.Codigo postal\n4.Telefono\n5.Edad")
    modificacion=Number(modificacion)-1
let cambio = prompt("Ingrese el nuevo dato")
    matriz.splice(0,cambio)

    for (let i = 0; i < 5; i++) {
        document.write(`${vector[i]} : ${matriz[sel][i]} - `)
    }
        break;
    default:
        break;
}

