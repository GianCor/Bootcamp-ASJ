import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        StringBuilder response = new StringBuilder();
        
        String word= scanner.nextLine();
        
        scanner.close();
        
        for(int i = 0; i<word.length(); i++) {
        	response.append((int)(word.charAt(i)));
        	response.append(" ");
        }
        System.out.println(response);
        }
}
