let totalFor=0,totalWhile=0,totalDoWhile,i=1
for (let i = 0; i <=100; i++) {
    totalFor=totalFor+i;
}
document.write(`Este es la suma con for ${totalFor} ********     `)
while(i<=100){
    totalWhile=totalWhile+i
    i++
}
document.write(`Este es la suma con while ${totalWhile}   ********   `)

do {
    totalDoWhile=totalDoWhile+i
    i++
} while (i<=100);
document.write(`Este es la suma con doWhile ${totalWhile} *********  `)
