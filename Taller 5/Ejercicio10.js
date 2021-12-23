let totalBoletas = 10, opcion = 0, documentos = [], cc = "";

function documento() {
    let cc = prompt("Ingrese su numero de documento")
    return cc;
}

function cantidad() {
    let c = Number(prompt("Cuantas boletas desea comprar"))
    if (c <= 4) {
        return c;
    } else {
        alert("No puedes comprar mas de 4 boletas")
        return 0;
    }

}
function disponible(cc) {
    for (let i = 0; i < 10; i++) {
        if (documentos[i] == cc) {
            return false;
        }
    }
}

do {
    opcion = Number(prompt("1.Comprar boletas\n2.Consultar cuantas boletas quedan\n3.Consultar compradores\n4.Salir"))

    switch (opcion) {
        case 1:
            cc = documento()

            if (disponible(cc) == false) {
                console.log(`El documento ${cc} Ya está registrado`)
            } else {
                documentos.push(cc)
            }
            totalBoletas -= cantidad()
            break;
        case 2:
            console.log(`La cantidad de boletas disponibles son: ${totalBoletas}`)
            break;
        case 3: console.log(documentos);
            break;
        case 4:
            break;
        default: console.log("Ingrese un valor correcto");
            break;
    }
} while (opcion != 4);
