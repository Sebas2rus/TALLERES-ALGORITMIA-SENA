let eleccion = "Y",i=0
let matriz = [];
while (eleccion=="Y") {
   matriz[i]= new Array()
   matriz[i][0]= prompt("Nombre de la direccion") 
   matriz[i][1]= prompt("Ciudad") 
   matriz[i][2]= prompt("Codigo postal") 
   matriz[i][3]= prompt("Telefono") 
   matriz[i][4]= prompt("Edad") 

    eleccion =prompt("Desea ingresar otra direccion Y or N")
eleccion = eleccion.toLocaleUpperCase
i++
}

console.log(matriz[0]);