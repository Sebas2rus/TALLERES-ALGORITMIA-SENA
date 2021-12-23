import java.util.Scanner;

public class Ejercicio02 {

    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        int b = 6, c = 0,b1=0;

        String [][] matriz = new String[4][7];
        
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 7; j++) {
                matriz[i][j]="°";
                System.out.print("|" + matriz[i][j] + "|");
            }
            System.out.println("");
        }
        
        System.out.println("");
        
        for (int a = 0; a < 4; a++) {
            while (c<=b) {                
                matriz[a][c]="x";
                c++;                
            }
            
            b1++;
            c=b1;
            b--;
        }
        for (int a = 0; a < 4; a++) {
            for ( c = 0; c < 7; c++) {
                System.out.print("|"+matriz[a][c]+"|");
                
            }
            System.out.println("");
        }
        
    }
}
