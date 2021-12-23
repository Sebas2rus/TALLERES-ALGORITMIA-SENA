let eleccion = "Y",i=0
let matriz = [],vector = ["Nombre de la direccion","Ciudad","Codigo postal","Telefono","Edad"]
while (eleccion=="Y"||eleccion=="y") {
   matriz[i]= new Array()
   matriz[i][0]= prompt("Nombre de la direccion") 
   matriz[i][1]= prompt("Ciudad") 
   matriz[i][2]= prompt("Codigo postal") 
   matriz[i][3]= prompt("Telefono") 
   matriz[i][4]= prompt("Edad") 

    eleccion =prompt("Desea ingresar otra direccion Y or N")

i++
}

console.log(matriz[0]);

for (let j = 0; j < matriz.length; j++) {
    for (let i = 0; i < 5; i++) {
        document.write(`${vector[i]} : ${matriz[j][i]} - `)
    }
    
}