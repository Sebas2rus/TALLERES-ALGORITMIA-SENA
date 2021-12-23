let matriz = []

for (let i = 0; i < 8; i++) {
    matriz[i] = new Array()
    for (let j = 0; j < 8; j++) {
        if (i == 0 || i == 2 || i ==4|| i == 6) {
            if (j == 0 || j == 2 || j ==4|| j == 6) {
                matriz[i][j]="O"
            } else {
                matriz[i][j] =" "
            }
        }else{
            if (j == 1 || j == 3 || j ==5|| j == 7) {
                matriz[i][j]="O"
            } else {
                matriz[i][j] =" "
            }
        }
    }
    console.log(matriz[i]);
}
