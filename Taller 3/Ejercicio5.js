let pago = prompt("Ingrese el valor a pagar")
let color = prompt("Ingrese el color de labolita")
color =color.toUpperCase()

console.log(color);
switch (color) {
    case "ROJO":
        console.log(`El pago corresponde a ${pago*0.6}`);
        break;
        case "AMARILLO":
            console.log(`El pago corresponde a ${pago*0.75}`);
            break;
            case "BLANCO":
            console.log(`El pago corresponde a ${pago}`);
            break;
    default: console.log("Ingrese un valor correcto ");
        break;
}