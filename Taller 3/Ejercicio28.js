let x = prompt("Ingrese el valor de x para evaluar la funcion x=-5x^3+-3x^2+8")
x = Number(x)
document.write(`El resultado de la operacion es: ${(-5*Math.pow(x,3))-(3*Math.pow(x,2))+8}`)