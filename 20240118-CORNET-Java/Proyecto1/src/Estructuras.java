import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
		
		//Ejercicio 1
		boolean flag = true;
		Scanner scan = new Scanner(System.in);
//		System.out.print("Ingrese los angulos internos del triangulo: ");
//		int acc = 0;
//		for(int i = 0; i<3; i++) {
//			int num = scan.nextInt();
//			if(num == 0) {
//				flag = false;
//				break;
//			}
//			acc += num;
//		}
//		System.out.println((acc == 180) && flag ? "Triangulo válido" : "No es un triangulo");
//		
//		
		//Ejercicio 2
//		
//		System.out.print("Ingrese el primer numero: ");
//		int n = scan.nextInt();
//		System.out.print("Ingrese el segundo numero: ");
//		int m = scan.nextInt();
//		int aux;
//		acc = 0;
//		
//		if(n>m) {
//			aux = n;
//			n = m;
//			m = aux;
//		}
//		
//		for(int i = n+1; i<m; i++) {
//			if(i%2 == 0) {
//				acc += i;
//			}
//		}
//		
//		System.out.println("La suma de los numeros pares entre " + n + " y " + m + " es: " + acc);
//		
//		//Ejercicio 3
//		
//		acc = 0;
//		System.out.print("Ingrese un numero: ");
//		n = scan.nextInt();
//		for(int i = 1; i<n; i++) {
//			if(n%i == 0) {
//				acc += i;
//			}
//		}
//		System.out.println(n == acc ? "Es un numero perfecto" : "No es un numero perfecto");
//		
//		Ejercicio 4
		
		
		int n;
		int aux;
		System.out.print("Ingrese un numero: ");
		n = scan.nextInt();
		StringBuilder builder = new StringBuilder();
		for(int i  = 0; i < n; i++) {
			
			aux = (i%2 == 0) ? n : n-1;
			
			if(aux != n) {
				builder.append(" ");
			}
			
			for(int j = 0; j < aux; j++) {
				builder.append(" *");
			}
			
			builder.append("\n");
		}
		System.out.println(builder);
		
		String word = scan.nextLine();
		char firstChar = word.charAt(0);

		if (Character.isDigit(firstChar)) {
		    System.out.println("El primer carácter es un número.");
		} else {
		    System.out.println("El primer carácter no es un número.");
		}
		
	}
}
