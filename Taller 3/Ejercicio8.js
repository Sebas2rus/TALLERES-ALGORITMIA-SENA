let candidato1=0,candidato2=0,candidato3=0
for (let i = 1; i <= 2500; i++) {
    let voto =prompt(`Ingrese el voto numero ${i} \n 1. Candidato 1 \n 2. Candidato 2 \n 3. Candidato 3`)
    switch (voto) {
        case "1":
candidato1++
            break;
        case "2":
candidato2++
            break;
        case "3":
candidato3++
            break;
        default:
            break;
    }
}
console.log(`El resultado de los votos del candidato 1 es: ${candidato1}`)
console.log(`El resultado de los votos del candidato 2 es: ${candidato2}`)
console.log(`El resultado de los votos del candidato 3 es: ${candidato3} `)