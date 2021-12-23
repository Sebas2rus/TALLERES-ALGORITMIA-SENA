let x = prompt("Ingrese el valor de x para evaluar la funcion x=3x^2+2x-5")
x = Number(x)
document.write(`El resultado de la operacion es: ${(3*Math.pow(x,2))+(2*x)-5}`)