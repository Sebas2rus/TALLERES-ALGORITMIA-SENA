let lados = prompt("Ingrese el valor relacionado con los lados ")

for (let i = 0; i < lados; i++) {
    console.log("*")
}
for (let j = 0; j < lados; j++) {
    for (let i = 1; i <= lados; i++) {
        if (i == 1 || i == lados) {
            console.log("*")
        } else {
            console.log(" ")
        }
    }
}
for (let i = 0; i < lados; i++) {
    console.log("*")
}
