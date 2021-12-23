function polares(r) {
    let x,y,posiciones
    x = r*Math.cos(0)
    y = r*Math.sin(0)
    return posiciones=(x+","+y)

}

let radio = prompt("Ingrese el radio")

document.write(`Las posiciones en x,y corresponden a: (${polares(radio)})`)