let matriz = [[12,-13,-41,-31],[56,-42,89,234],[-15,-51,23,-57,88],[12,45,-67,-89]]
let positivos = 0,negativos=0;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (matriz[i][j]>0) {
            positivos++
        } else {
            negativos--
        }
    }
}
document.write(`La cantidad de numeros positivos son: ${positivos} Y la cantidad de numeros negativos es: ${negativos}`)
