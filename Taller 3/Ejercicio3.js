let cantidad = prompt("Elija el tamaño del triangulo")
let iterador=0;
for (let i = 1; i <= cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {
        if (i>iterador) {
            console.log("*");
        } else {
            console.log(" ");
        }                
    }
    iterador++;
}