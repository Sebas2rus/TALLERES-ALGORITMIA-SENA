let inversion1 = prompt("Cual es la inversion del cliente 1")
let inversion2 = prompt("Cual es la inversion del cliente 2")
let inversion3 = prompt("Cual es la inversion del cliente 3")

inversion1 = Number(inversion1)
inversion2 = Number(inversion2)
inversion3 = Number(inversion3)

console.log(typeof(inversion1));
let inversion = (inversion1+inversion2+inversion3)

document.write(`La inversion 1 corresponde al : ${Math.round((inversion1*100)/inversion)}  `)
document.write(`La inversion 2 corresponde al : ${Math.round((inversion2*100)/inversion)}  `)
document.write(`La inversion 3 corresponde al : ${Math.round((inversion3*100)/inversion)}  `)