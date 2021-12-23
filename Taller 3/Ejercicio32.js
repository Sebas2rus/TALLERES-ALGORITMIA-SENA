let media
for (let i = 1; i <=5; i++) {
    let numero = prompt(`Ingrese el valor ${i}`)
    numero = Number(numero)
    media = numero+media
}
document.write(`La media corresponde a: ${Math.round(media/5)}`)