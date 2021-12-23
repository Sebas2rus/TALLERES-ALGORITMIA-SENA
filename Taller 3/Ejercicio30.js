let capital = prompt("Cual es el capital que desea invertir")
capital =Number(capital)
let años = prompt("Cuantos años de inversion")
año=Number(años)

document.write(`El interes despues de ${años} es: ${capital*0.15*años}`)