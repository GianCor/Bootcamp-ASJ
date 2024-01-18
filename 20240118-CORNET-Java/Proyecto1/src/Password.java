import java.util.Random;
public class Password {
	private int longitud;
	private String password;
	
	Password(){
		this.longitud = 9;
		this.password = generarPassword(); 
	}
	
	Password(int longitud){
		this.longitud = longitud;
		this.password = generarPassword();
	}
	
	Password(String password){
		this.longitud = password.length();
		this.password = password;
	}
	
    public int getLongitud() {
		return this.longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getPassword() {
		return this.password;
	}

	private String generarPassword() {
        String caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!#$%&/()=¨¨*[]{}´+-.,;:_|°¬";
        StringBuilder contraseñaGenerada = new StringBuilder();

        Random random = new Random();
        for (int i = 0; i < this.longitud; i++) {
            int indice = random.nextInt(caracteres.length());
            contraseñaGenerada.append(caracteres.charAt(indice));
        }

        return contraseñaGenerada.toString();
    }
	
	public boolean esFuerte() {
	    int mayusculas = 0;
	    int minusculas = 0;
	    int numeros = 0;
	    int especiales = 0;

	    for (int i = 0; i < this.password.length(); i++) {
	        char caracter = this.password.charAt(i);
	        if (Character.isUpperCase(caracter)) {
	            mayusculas++;
	            if (mayusculas > 2 && minusculas > 1 && numeros > 5 && especiales > 0) {
	                return true;
	            }
	        } else if (Character.isLowerCase(caracter)) {
	            minusculas++;
	        } else if (Character.isDigit(caracter)) {
	            numeros++;
	        } else {
	        	especiales++;
	        }
	    }

	    return mayusculas > 2 && minusculas > 1 && numeros > 5 && especiales > 0;
	}
}
