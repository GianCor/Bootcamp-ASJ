import java.util.Random;
public class Persona {
	private String nombre;
	private String dni;
	private int edad;
	private char sexo;
	private float peso;
	private float altura;
	
	Persona(){
		this.nombre="John Doe";
		this.sexo='M';
		this.dni = this.generaDNI();
		this.edad = 0;
		this.peso = 0;
		this.altura = 0;
	}
	
	Persona(String nombre, int edad, char sexo, float peso, float altura){
		this.nombre = nombre;
		this.dni = this.generaDNI();
		if(comprobarSexo(sexo)) {
			this.sexo = sexo;
		} else {
			this.sexo = 'H';
		}
		this.peso = peso;
		this.altura = altura;
	}
	
	Persona(String nombre, int edad, char sexo){
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
		this.altura = 0;
		this.peso = 0;
		this.dni = this.generaDNI();
	}
	
	public boolean esMayorDeEdad() {
		return this.edad > 17;
	}
	
	private boolean comprobarSexo(char sexo) {
		return sexo == 'M' || sexo == 'H' ? true : false;
	}
	
	public int calcularIMC(){
		if(this.peso > 0 || this.altura > 0) {
			float imc = this.peso/(this.altura*this.altura);
			return (imc < 25 && imc > 20) ? 0 : 1;
		} else {
			return -1;
		}
	}
    private String generaDNI() {
        Random random = new Random();
        StringBuilder builder = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            builder.append(random.nextInt(10));
        }

        return builder.toString();
    }

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", dni=" + dni + ", edad=" + edad + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}
    
}
