import java.util.Scanner;
import java.lang.StringBuilder;
public class TecladoTelefono {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		StringBuilder mensajeDescifrado = new StringBuilder();
		String mensaje = scan.nextLine();
		String[] subcadenas = mensaje.split(" ");
		String[][] teclado = new String[10][4];
		boolean flag = false;
		while(flag == false) {
			for(int i = 0; i<subcadenas.length; i++) {
				int a = (int)subcadenas[i].charAt(0);
				int indice = a - '0';
				for(int j = 0; j<subcadenas[i].length(); j++) {
					mensajeDescifrado.append(teclado[indice][subcadenas[i].length()]);
				}
			}

			
		}
		
	}
}
