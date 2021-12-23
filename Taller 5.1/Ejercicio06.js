let matriz = [[25,12,26,7,15],[12,12,2,9,25],[25,6,4,25,6],[1,4,6,10,9],[2,25,8,5,8]], diagonal = []

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i==j) {
            matriz[i][j] = "A"
        }
    }
    console.log(`[${matriz[i]}]`);
}
