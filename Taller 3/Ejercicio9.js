let respuesta =prompt("Cuantos días desea registar ?")
let tMax =0,tMin=0,errores=0

for (let i = 0; i < respuesta; i++) {
    let temperaturaMax=prompt(`Ingrese la temperatura dia${i} máxima`)
    let temperaturaMin=prompt(`Ingrese la temperatura dia${i} mínima`)
  
    if (temperaturaMax == 9 || temperaturaMin==9) {
        errores++
    }
    tMax=temperaturaMax+tMax
    tMin=temperaturaMin+tMin
}

tMax=(tMax*2)/respuesta
tMin=(tMin*2)/respuesta
console.log(`El numero de días es: ${respuesta}`);
console.log(`El promedio de la temperatura máxima es: ${tMax} `);
console.log(`El promedio de la temperatura mínima es: ${tMin} `);
console.log(`El numero de errores son: ${errores} `);