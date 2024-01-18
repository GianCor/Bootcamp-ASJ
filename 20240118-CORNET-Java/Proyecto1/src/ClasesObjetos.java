import java.util.Scanner;
import java.util.ArrayList;
public class ClasesObjetos {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
//		Ejercicio1
//		Operaciones operacion = new Operaciones(20, 30);
//		System.out.println(operacion.sumar());
//		System.out.println(operacion.restarNumero1aNumero2());
//		System.out.println(operacion.restarNumero2aNumero1());
//		System.out.println(operacion.multiplicar());
//		System.out.println(operacion.dividirNumero1porNumero2());
//		System.out.println(operacion.dividirNumero2porNumero1());
		
//		Ejercicio3
//		ArrayList<Password> passwords = new ArrayList();
//		Password password;
//		boolean flag = true;
//		int longitud;
//		String input;
//		while(flag == true) {
//			System.out.println("1. Crear contraseña con longitud definida");
//			System.out.println("2. Ingresar contraseña");
//			System.out.println("3. Crear una contraseña de 8 caracteres");
//			System.out.println("4. Ver contraseñas generadas");
//			System.out.println("5. Salir");
//			System.out.println("Ingrese una opcion:");
//			int option = scan.nextInt();
//			switch(option) {
//			case 1:
//				System.out.println("Ingrese la longitud para su contraseña: ");
//				option = scan.nextInt();
//				password = new Password(option);
//				passwords.add(password);
//				break;
//			case 2:
//				System.out.println("Ingrese una contraseña: ");
//				scan.nextLine();
//				input = scan.nextLine();
//				password = new Password(input);
//				passwords.add(password);
//				break;
//			case 3:
//			password = new Password();
//			passwords.add(password);
//			break;
//			case 4:
//				for(Password pass : passwords) {
//					System.out.println("Contraseña: " + pass.getPassword() + (pass.esFuerte() ? " Fuerte" : " Debil"));
//				}
//			break;
//			case 5:
//				flag = false;
//				break;
//			}
//		}
		
//		Ejercicio4
//		Persona persona;
//		ArrayList<Persona> personas = new ArrayList<Persona>();
//		String nombre;
//		int edad;
//		String sexo;
//		float peso;
//		float altura;
//		System.out.println("Ingrese nombre, edad, sexo, peso y altura en orden");
//		nombre = scan.nextLine();
//		edad = scan.nextInt();
//		scan.nextLine();
//		sexo = scan.nextLine();
//		peso = scan.nextFloat();
//		altura = scan.nextFloat();
//		char charSexo = (char) sexo.charAt(0);
//		persona = new Persona(nombre, edad, charSexo, peso, altura);
//		personas.add(persona);
//		System.out.println("Ahora ingrese valores diferentes para nombre, edad y sexo en orden");
//		scan.nextLine();
//		nombre = scan.nextLine();
//		edad = scan.nextInt();
//		scan.nextLine();
//		sexo = scan.nextLine();
//		charSexo = (char) sexo.charAt(0);
//		persona = new Persona(nombre, edad, charSexo);
//		personas.add(persona);
//		persona = new Persona();
//		personas.add(persona);
//		
//		for(Persona p : personas) {
//			String mensaje = "";
//			int valorIMC = p.calcularIMC();
//			switch (valorIMC){
//			case 1: mensaje = "Esta persona tiene que aflojarle";
//			break;
//			case 0: mensaje = "Esta persona taecha una fiera";
//			break;
//			case -1: mensaje = "Esta persona tiene masa infinita, es probablemente el objeto mas denso y liviano que existe en el universo, las leyes fisicas no aplican para esta persona.\nEso o se le escapo el dedo a alguien, no se puede dividir por 0.";
//			break;
//			default:
//				mensaje = "Algo anda mal";
//			}
//			System.out.println(mensaje);
//			System.out.println(p.esMayorDeEdad() ? "Es mayor" : "Es menor");
//			System.out.println(p.toString());
//		}
	}

}
