let iterador = 0,suma=0,numero;
do {
     numero = prompt("Ingrese un numero mayor a cero para registrarlo\nMenor a cero para terminar la ejecucion")
     numero = Number(numero)
    let vector =[]
    if (numero>0) {
        vector[iterador] = numero    
    suma+=vector[iterador]
    }
} while (numero>0);
 
document.write(`La suma del vector es: ${suma}`)
