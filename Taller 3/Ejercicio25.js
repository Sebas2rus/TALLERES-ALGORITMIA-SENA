let hombres = prompt("Cuantos hombres tiene como alumnos")
hombres=Number(hombres)
let mujeres = prompt("Cuantas mujeres tiene como alumnas")
mujeres=Number(mujeres)

document.write(`El porcentaje de hombres es: ${Math.round((hombres*100)/(hombres+mujeres))}   `)
document.write(`El porcentaje de mujeres es: ${Math.round((mujeres*100)/(hombres+mujeres))}`)
