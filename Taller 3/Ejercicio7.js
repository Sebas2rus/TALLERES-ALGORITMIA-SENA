const precioHora = 1000;
let horas = prompt("Cuantas horas trabajo")

if(horas<=40){
console.log(`Su pago este mes es:  ${horas*precioHora}`);
}else if(horas>40 && horas<48){
    let pago = ((horas-40)*precioHora)+(precioHora*40)
console.log(`Su pago este mes es: ${pago}`);
}else if(horas>48){
    let pago = ((horas-40)*2*precioHora)+(precioHora*40)
    let pagoTotal = pago+((horas-48)*3*precioHora)
    console.log(`Su pago de este mes es: ${pagoTotal} `);
}