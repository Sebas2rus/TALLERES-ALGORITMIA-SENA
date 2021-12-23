let cadena = prompt("Ingrese una cadena de texto")
let a = 0, an = 0, and = 0


for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i)=="a") {
        if (cadena.charAt(i+1)=="n") {
            if (cadena.charAt(i+2)=="d") {
                and++
                cadena=cadena.replace("d"," ")
            }
            an++
            cadena=cadena.replace("n"," ")
        }
        a++
        cadena=cadena.replace("a"," ")
    }
}

console.log(cadena);
document.write(`El numero de veces que se repite "a": ${a}, AN se repite ${an}, AND se repite ${and}`)