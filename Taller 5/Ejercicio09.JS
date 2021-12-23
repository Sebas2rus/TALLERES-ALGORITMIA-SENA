let matriz = [[],[],[],[],[],[],[],[],[],[]],
    respuesta = 0, i = 1, j = 1, k = 1, l = 1, m = 1, n = 1, o = 1, p = 1, q = 1, r = 1, book = "", respuestaLibro = 0

for (let i = 0; i < 10; i++) {
    matriz[i] = new Array()

}

matriz[0][0] = "algoritmia"
matriz[0][1] = "Estructuras"
matriz[0][2] = "Fisica"
matriz[0][3] = "Calculo"
matriz[0][4] = "Programacion"
matriz[0][5] = "Algebra lineal"
matriz[0][6] = "Lenguanjes de programacion"
matriz[0][7] = "Redes"
matriz[0][8] = prompt("Ingrese una materia")
matriz[0][9] = prompt("Ingrese una materia")

while (respuesta != 3) {
    respuesta = Number(prompt("Seleccione una de las siguientes opciones\n1.Ingresar un libro\n2.Mostrar todos los libros segun materia\n3.Salir"))

    switch (respuesta) {
        case 1:
            do {
                let libro = prompt(`En que materia desea ingresar el libro ?\n0.${matriz[0][0]}\n1.${matriz[0][1]}\n2.${matriz[0][2]}\n3.${matriz[0][3]}\n4.${matriz[0][4]}\n5.${matriz[0][5]}\n6.${matriz[0][6]}\n7.${matriz[0][7]}\n8.${matriz[0][8]}\n9.${matriz[0][9]}`)

                switch (libro) {
                    case "0":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[i].push(book)
                        i++
                        break;
                    case "1":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[j][1] = book
                        j++
                        break;
                    case "2":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[k][2] = book
                        k++
                        break;
                    case "3":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[l][3] = book
                        l++
                        break;
                    case "4":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[m][4] = book
                        m++
                        break;
                    case "5":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[n][5] = book
                        n++
                        break;
                    case "6":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[o][6] = book
                        o++
                        break;
                    case "7":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[p][7] = book
                        p++
                        break;
                    case "8":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[q][8] = book
                        q++
                        break;
                    case "9":
                        book = prompt("Ingrese el nombre del libro")
                        matriz[r][9] = book
                        r++
                        break;

                }
                respuestaLibro = Number(prompt("1. Para ingresar otro libro"))

            } while (respuestaLibro == 1);


            break;
        case 2:
            console.log(matriz[0], matriz[1], matriz[2], matriz[3], matriz[4], matriz[5], matriz[6], matriz[7], matriz[8], matriz[9]);
            break;

        default: console.log("Ingrese un valor correcto");
            break;
    }
}




