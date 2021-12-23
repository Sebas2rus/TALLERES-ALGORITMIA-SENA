function fecha(fecha) {
    let dia,mes,año
    dia=fecha.slice(0,2);    
    dia = Number(dia)
    mes = fecha.slice(3,5)
    mes = Number(mes)
    año = fecha.slice(8,10)
    año = Number(año)
    
    if (dia <31 && mes<=12) {
        document.write(`La fecha corta es: ${dia}/${mes}/${año}`)    
    } else {
        document.write("No es una fecha valida")
    }
}
    let texto = prompt("Ingrese una fecha con la estructura: DD-MM-AAAA")
    
    fecha(texto);
    