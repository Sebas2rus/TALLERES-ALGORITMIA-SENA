let seleccion, vector=[],producto=1,iterador=0;
 
do {
    seleccion = prompt("Ingrese un valor, o n para terminar")
 
    if(seleccion=="n"){
        break;
    }
    seleccion= Number(seleccion)
    vector[iterador]= seleccion;
 
    producto*=vector[iterador]
 
iterador++    
} while (seleccion !="n");
 
document.write(`El producto de la matriz es: ${producto}` )
console.log(vector);
