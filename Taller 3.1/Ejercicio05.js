let alumnos = prompt("Cuantos alumnos desea ingresar ?")
let nombre=[],ingles=[],matematicas=[]
let matriz=new Array(alumnos);

for (let i = 0; i < alumnos; i++) {
    let promIngles=0,promMatematicas=0;
    nombre[i] = prompt("Ingrese el nombre del alumno")
    for (let j = 0; j < 5; j++) {
        ingles[j] = (Math.random()*(1,5)).toFixed(1)
        ingles[j]=Number(ingles[j])
        matematicas[j] = (Math.random()*(1,5)).toFixed(1)
        matematicas[j]=Number(matematicas[j])
        promIngles+=ingles[j]
        promMatematicas+=matematicas[j]

    }
    console.log(matematicas);
    console.log(ingles);

    promIngles=(promIngles/5).toFixed(1)
    promMatematicas=(promMatematicas/5).toFixed(1)

    matriz[i]={
        0:nombre[i],
        1:promIngles,
        2:promMatematicas
    };

    document.write(`El alumno ${nombre} tiene: promedio Ingles: ${promIngles} Promedio Matematicas ${promMatematicas} `)
    console.log(`${nombre[i]}`)
}