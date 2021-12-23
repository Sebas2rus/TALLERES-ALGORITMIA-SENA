let fecha = prompt("Ingrese el valor con estructura DD-MM-AAAA")


fecha.substring(0,2)<30 ? "a":document.write("El día, no es un valor correcto")
fecha.substring(3,5)<12 ? "a":document.write("El mes, no es un valor correcto")

switch (fecha.substring(3,5)) { 
    case "01":
        document.write(`${fecha.substring(0,2)} Enero ${fecha.substring(6,11)} `)
        break;
        case "01":
            document.write(`${fecha.substring(0,2)} Enero ${fecha.substring(6,11)} `)
            break;case "02":
            document.write(`${fecha.substring(0,2)} Febrero ${fecha.substring(6,11)} `)
            break;case "03":
            document.write(`${fecha.substring(0,2)} Marzo ${fecha.substring(6,11)} `)
            break;case "04":
            document.write(`${fecha.substring(0,2)} Abril ${fecha.substring(6,11)} `)
            break;case "05":
            document.write(`${fecha.substring(0,2)} Mayo ${fecha.substring(6,11)} `)
            break;case "06":
            document.write(`${fecha.substring(0,2)} Junio ${fecha.substring(6,11)} `)
            break;case "07":
            document.write(`${fecha.substring(0,2)} Julio ${fecha.substring(6,11)} `)
            break;case "08":
            document.write(`${fecha.substring(0,2)} Agosto ${fecha.substring(6,11)} `)
            break;case "09":
            document.write(`${fecha.substring(0,2)} Septiembre ${fecha.substring(6,11)} `)
            break;case "10":
            document.write(`${fecha.substring(0,2)} Octubre ${fecha.substring(6,11)} `)
            break;case "11":
            document.write(`${fecha.substring(0,2)} Noviembre ${fecha.substring(6,11)} `)
            break;case "12":
            document.write(`${fecha.substring(0,2)} Diciembre ${fecha.substring(6,11)} `)
            break;
    default:document.write("Error, ingrese un valor correcto ")
        break;
}