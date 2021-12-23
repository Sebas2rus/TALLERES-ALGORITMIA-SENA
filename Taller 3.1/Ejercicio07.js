let vector = [], iterador = 0,promedio=0

for (let i = 0; i < 10; i++) {
    vector[i] = iterador
    let promedios=vector[i]
    promedio+=promedios
    iterador += 20
}
seleccion=1
while (seleccion != 4) {

    console.log("1. Calcular el promedio del vector");
    console.log("2.Calcular la suma del vector");
    console.log("3.Calcular cada posicion dividido entre dos");
    console.log("4. Salir");
    seleccion = prompt("1. Calcular el promedio del vector\n2.Calcular la suma del vector\n3.Calcular cada posicion dividido entre dos\n4. Salir ")

    switch (key) {
        case 1:
                document.write(`El promedio del vector es: ${promedio/10}`)
            break;
        case 2:
            document.write(`La suma del vector es: ${promedio}`)
            break; 
            case 3:
                for (let i = 0; i < i; i++) {
                    vector[i] = vector[i]/2                    
                }
                document.write(`La division de vector entre dos es: ${vector}`)
            break;             
        default: alert("Error, digite un valor correco")
            break;
    }
}
