let seleccion = 0, productos = [];

function product(p1) {
    let nombre = p1;
    p1 = [];

    p1 [0] = prompt("Ingrese el código del articulo");
    p1 [1] = nombre ;
    p1 [2] = prompt("Ingrese la cantidad del articulo")

    productos.push(p1)   
}

function añadir(i) {
      let un= Number(productos[i][2])
     let unidades = Number(prompt("Cuantas nueva unidades desea ingresar"))
     productos[i][2]=unidades+un
}

function vender(i) {
    let un= Number(productos[i][2])
   let unidades = Number(prompt("Cuantas  unidades desea comprar"))
   if (un>=unidades) {
    productos[i][2]=un-unidades
   } else {
       alert("No se cuenta con unidades suficientes de este producto")
   }
}

do {
    seleccion = Number(prompt("Menú\n1.Ingresar\n2.Agregar\n3.Vender\n4.consultar\n5.Salir"))

    switch (seleccion) {
        case 1:
            let producto = prompt("Ingrese el nombre del nuevo producto")           
            product(producto)
            console.log(productos);
            console.log(productos[0]);
            break;
        case 2:
                
                for (let i = 0; i < productos.length; i++) {
                    console.log(`${i}. ${productos[i][1]}`);                    
                }
                i = Number(prompt("Que numero de producto desea modificar: "))
                 añadir(i)
                 
            break;
        case 3:
            for (let i = 0; i < productos.length; i++) {
                console.log(`${i}. ${productos[i][1]}`);                    
            }
            i = Number(prompt("Que numero desea comprar "))
             vender(i)
             console.log(productos[i]);

            break;
        case 4:
            for (let i = 0; i < productos.length; i++) {
                console.log(`${i}. ${productos[i][1]}`);                    
            }
            i = Number(prompt("Que producto desea consultar "))                         
             console.log(productos[i][2]);

            break;
        case 5:

            break; console.log("Ingrese un valor correcto");
        default:
            break;
    }

} while (seleccion != 5);