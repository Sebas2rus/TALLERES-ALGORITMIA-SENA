let sueldo = prompt("Cual es la base de su sueldo ")
let ventas=0
sueldo = Number(sueldo)

for (let i = 1; i<=3; i++) {
    let venta = prompt("Cual es el valor de la venta")
    venta=Number(venta)
    ventas = venta+ventas;
}

document.write(`El total del sueldo mas la comsiones son: ${sueldo+(ventas*0.1)}`)