import java.util.Scanner;



public class Ejercicio14 {

    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);

        String matriz[][] = new String[5][4];
        String vector[] = new String[3];

        matriz[0][0] = "Actinio";
        matriz[1][0] = "Aluminio";
        matriz[2][0] = "Americio";
        matriz[3][0] = "Antimonio";
        matriz[4][0] = "Argón";

        matriz[0][1] = "Ac";
        matriz[1][1] = "Al";
        matriz[2][1] = "Am";
        matriz[3][1] = "Sb";
        matriz[4][1] = "Ar";

        matriz[0][2] = "89";
        matriz[1][2] = "13";
        matriz[2][2] = "95";
        matriz[3][2] = "51";
        matriz[4][2] = "18";

        matriz[0][3] = "227";
        matriz[1][3] = "26.98";
        matriz[2][3] = "243";
        matriz[3][3] = "121.76";
        matriz[4][3] = "39.94";

        vector[0]="Nombre";
        vector[1]="Simbolo";
        vector[2]="Número";
        
        
        int opcion = 0;
        do {

            System.out.println("Menú de acciones\n\n"
                    + "Marque el numero de la operacion que desea realizar\n\n"
                    + "1. Listar tabla periodica\n"
                    + "2. Mostrar un elemento de la tabla periodica\n"
                    + "3. Obtener la composicion de un compuesto quimico\n"
                    + "4. Salir");
            opcion = keyboard.nextInt();

            String simbolo="",comparacion;
            double peso=0;

            switch (opcion) {
                case 1:System.out.println("");
                    System.out.println("");
                    for (int i = 0; i < 5; i++) {
                        System.out.println(matriz[i][1]);
                    }                    			
                    break;
                case 2:
                    System.out.println("");
                    System.out.println("");
                    System.out.println("Escriba el simbolo quimico del que desea ver la informacion");
                    simbolo=keyboard.next();
                    
                    for (int i = 0; i < 3; i++) {
                        System.out.print("["+vector[i]+"]");
                    }
                    System.out.println("");
                    
                    for (int i = 0; i < 5; i++) {
                        for (int j = 0; j < 3; j++) {
                            comparacion=matriz[i][j];
                            
                            if(simbolo.equals(comparacion)){
                                System.out.println(matriz[i][0]+"     "+matriz[i][1]+"      "+matriz[i][2]);
                                System.out.println("Su peso atómico es: " + matriz[i][3]);
                            }
                        }
                    }
                    System.out.println("");
                    System.out.println("");
                    break;
                case 3:
                    System.out.println("");
                    System.out.println("");                            
                    System.out.println("Fórmula del compuesto Quimico");
                    String Compuesto = keyboard.next();
                    
                    System.out.println("Cuantos elementos hay en el compuesto quimico ?");
                    int cantidadElementos=keyboard.nextInt();
                    
                    String elementosCompuesto[][]=new String [cantidadElementos][2];
                    
                    for (int i = 0; i <cantidadElementos; i++) {
                        System.out.print("Ingrese el simbolo del elemento " + (i+1)+":");
                        String simboloElemento= keyboard.next();
                        System.out.println("");
                        System.out.print("Cantidad de átomos: ");
                        String cantidadAtomos=keyboard.next();
                        
                        elementosCompuesto[i][0]=simboloElemento;
                        elementosCompuesto[i][1]=cantidadAtomos;
                    }
                    System.out.println("");
                    System.out.println("Cuantos gramos pesa el compuesto ?");
                    int pesoCompuesto = keyboard.nextInt();
                    System.out.println("");
                    System.out.println("");
                    System.out.println("Informe");
                    System.out.println("[Cantidad]");
                    
                    for (int i = 0; i < 3; i++) {
                        System.out.print("["+vector[i]+"]");
                    }
                    System.out.println("");
                    
                    for (int i = 0; i < cantidadElementos; i++) {
                        
                            if ((elementosCompuesto[i][0]).equals(matriz[i][1])) {
                                System.out.println(elementosCompuesto[i][1]+" átomo(s) de "+matriz[i][0]+" "+matriz[i][1] +"        "+matriz[i][2]);
                                System.out.println("Su peso átomico s: "+matriz[i][3]);
           
                                peso=peso+(Double.parseDouble(matriz[i][3]))+(Double.parseDouble(elementosCompuesto[i][1]));
                                System.out.println("");
                            
                        }
                    }
                    System.out.println("");
                    System.out.println("Cada molécula de " + Compuesto+" pesa: "+ peso+"u");
                    System.out.println("Peso del compuesto "+ pesoCompuesto+"Gr");                    
                    System.out.println("");
                    break;
                case 4:
                    System.out.println("");
                    System.out.println("Gracias por usar la aplicacion");
                    System.out.println("Fin");
                    opcion=4;
                    break;
                default: System.out.println("Error");
                    break;

            }
        } while (opcion == 0 || opcion == 1 || opcion == 2 || opcion == 3);
    }
}