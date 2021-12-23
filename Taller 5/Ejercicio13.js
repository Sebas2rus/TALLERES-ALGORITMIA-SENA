let seleccion = 0, productos = [], datos = ["Nombre", "Marca","tamaño","precio", "Cantidad","Precio Total", "Precio Inventario"];

function product(p1) {
    let nombre = p1;
    p1 = [];

    p1 [0] = nombre
    p1 [1] = prompt("Ingrese la marca del articulo del articulo");
    p1 [2] = prompt("Ingrese el tamaño del articulo");
    p1 [3] = Number(prompt("Ingrese el precio del articulo"))
    p1 [4] = Number(prompt("Unidades existente"))
    p1 [5] = p1[3]*p[4]
    p1[6]+=p1[5]
    productos.push(p1)   
}

function añadir(i) {
      for (let i = 0; i < productos.length; i++) {
        if (i==productos[i][0]) {
            console.log(productos[i]);
        }else{
            console.log("Seleccione un producto correcto");            
        }
      }
}


do {
    seleccion = Number(prompt("Menú\n1.Ingresar\n2.seleccionar\n3.Vender\n4.consultar"))

    switch (seleccion) {
        case 1:
            let sel
            do {
                let producto = prompt("Ingrese el nombre del nuevo producto")           
                product(producto)
             sel = Number(prompt("1. Si desea ingresar otro valor"))
            } while (sel == 1);
            break;
        case 2:
                
                for (let i = 0; i < productos.length; i++) {
                    console.log(`${i}. ${productos[i][1]}`);                    
                }
                i = prompt("Que producto desea modificar: ")
                 añadir(i)
                 
            break;
        case 3:
            console.log(datos)
            for (let i = 0; i < productos.length; i++) {
                console.log([i]);   
            }
            
            break;

        case 4:

            break; console.log("Ingrese un valor correcto");
        default:
            break;
    }

} while (seleccion != 4);