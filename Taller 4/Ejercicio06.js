function fecha(fecha) {
let dia,mes,año
dia=fecha.slice(0,2);    
mes = fecha.slice(3,5)
año=fecha.slice(8,10)

document.write(`La fecha corta es: ${dia}/${mes}/${año}`)
}

let texto = prompt("Ingrese una fecha con la estructura: DD-MM-AAAA")

fecha(texto)
