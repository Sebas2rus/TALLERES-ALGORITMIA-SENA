let matriz = [
    [25, 12, 26, 7, 15],
    [12, 12, 2, 9, 25],
    [25, 6, 4, 25, 6],
    [1, 4, 6, 10, 9],
    [2, 25, 8, 5, 8]
]

let sumaMatriz=0,a=[],b=[],c=[],d=[],e=[],f=[],g=[],h=[],k=[],l=[],m=[],n=[],o=[];

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        sumaMatriz+=matriz[i][j]
        switch (matriz[i][j]) {
            case 25:
                a.push(matriz[i][j])
                break;
                case 12:
                    b.push(matriz[i][j])
                    break;
                    case 26:
                c.push(matriz[i][j])
                break;
                case 7:
                d.push(matriz[i][j])
                break;
                case 15:
                e.push(matriz[i][j])
                break;
                case 2:
                f.push(matriz[i][j])
                break;
                case 9:
                g.push(matriz[i][j])
                break;
                case 6:
                h.push(matriz[i][j])
                break;
                case 4:
                k.push(matriz[i][j])
                break;
                case 1:
                l.push(matriz[i][j])
                break;
                case 10:
                m.push(matriz[i][j])
                break;
                case 8:
                n.push(matriz[i][j])
                break;
                case 5:
                o.push(matriz[i][j])
                break;
            default:
                break;
        }
    }
}

document.write(`La suma de todos los elementos de la matriz es: ${sumaMatriz}`)
console.log(`La suma de todos los elementos de la matriz es: ${sumaMatriz}`);
console.log(`La cantidad de 25 son : ${a.length} [${a}] `);
console.log(`La cantidad de 12 son : ${b.length} [${b}] `);
console.log(`La cantidad de 26 son : ${c.length} [${c}] `);
console.log(`La cantidad de 7 son : ${d.length} [${d}] `);
console.log(`La cantidad de 16 son : ${e.length} [${e}] `);
console.log(`La cantidad de 2 son : ${f.length} [${f}] `);
console.log(`La cantidad de 9 son : ${g.length} [${g}] `);
console.log(`La cantidad de 6 son : ${h.length} [${h}] `);
console.log(`La cantidad de 4 son : ${k.length} [${k}] `);
console.log(`La cantidad de 1 son : ${l.length} [${l}] `);
console.log(`La cantidad de 10 son : ${m.length} [${m}] `);
console.log(`La cantidad de 8 son : ${n.length} [${n}] `);
console.log(`La cantidad de 5 son : ${o.length} [${o}] `);
