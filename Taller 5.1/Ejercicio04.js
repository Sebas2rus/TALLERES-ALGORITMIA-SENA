let tabla = [1,2,3,4,5,6,7,8,9], numero, producto=[0,0,0,0,0,0,0,0,0]

numero = Number(prompt("Ingrese un numero al cual deseas calcular las tablas"))

for (let i = 0; i <= tabla.length ; i++) {
    for (let j = 0; j < tabla[i]; j++) {
        producto[i]+=numero
       

    }
    console.log(`La suma de los elementos es: ${producto[i]}`);
}

