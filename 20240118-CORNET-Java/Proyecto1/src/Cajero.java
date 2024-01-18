import java.util.Scanner;
import java.util.ArrayList;

public class Cajero {

    public static void main(String[] args) {
        float balance = 25000;
        ArrayList<String> transactions = new ArrayList<String>();
        
        Scanner scan = new Scanner(System.in);
        boolean flag = true;
        
        while(flag == true) {
            System.out.println("\n1. Extraer");
            System.out.println("2. Depositar");
            System.out.println("3. Consultar saldo");
            System.out.println("4. Consultar movimientos");
            System.out.println("5. Salir");
            System.out.print("Seleccione una opcion: ");

            int option = scan.nextInt();

            switch (option) {
                case 1:
                    balance = withdraw(balance, transactions, scan);
                    break;
                case 2:
                    balance = deposit(balance, transactions, scan);
                    break;
                case 3:
                	checkBalance(balance, transactions);
                    break;
                case 4:
                	viewTransactions(transactions);
                    break;
                case 5:
                	System.out.println("\nHasta la proxima");
                	flag = false;
                	break;
                default:
                    System.out.println("\nOpcion inválida, intenta de nuevo");
                    break;
            }
        }

        scan.close();
    }
	
	public static float withdraw(float balance, ArrayList<String> transactions, Scanner scan) {
		System.out.print("\nIngrese monto: ");
		float amount = scan.nextFloat();
		float aux = balance;
		balance-=amount;
		if(balance<0) {
			transactions.add("\nExtraido: Rechazado");
			System.out.print("\nNo tiene saldo suficiente en su cuenta");
			balance = aux;
		} else {
			transactions.add("\nExtraido: " + amount + "$");
		}
		return balance;
	}
	
	public static float deposit(float balance, ArrayList<String> transactions, Scanner scan) {
		System.out.print("\nIngrese monto: ");
		float amount = scan.nextFloat();
		balance+=amount;
		transactions.add("\nDepositado: " + amount + "$");
		return balance;
	}
	
	public static void checkBalance(float balance, ArrayList<String> transactions) {
		System.out.println("\nTu saldo es: " + balance + "$");
		transactions.add("\nConsultado saldo: " + balance + "$");
	}
	
	public static void viewTransactions(ArrayList<String> transactions) {
	    for (int i = transactions.size() - 1; i > -1; i--) {
	        System.out.println(transactions.get(i));
	    }
	}
}
