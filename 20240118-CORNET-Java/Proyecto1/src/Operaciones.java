
public class Operaciones {
	private int numero1;
	private int numero2;
	
	Operaciones(int numero1, int numero2){
		this.numero1 = numero1;
		this.numero2 = numero2;
	}
	
	public int getNumero1() {
		return numero1;
	}

	public void setNumero1(int numero1) {
		this.numero1 = numero1;
	}

	public int getNumero2() {
		return numero2;
	}

	public void setNumero2(int numero2) {
		this.numero2 = numero2;
	}

	
	public int restarNumero2aNumero1() {
		return this.numero1 - this.numero2;
	}
	
	public int restarNumero1aNumero2() {
		return this.numero2 - this.numero1;
	}
	
	public double dividirNumero1porNumero2() {
		return (double)this.numero1 / (double)this.numero2;
	}
	
	public double dividirNumero2porNumero1() {
		return (double)this.numero2 / (double)this.numero1;
	}
	
	public double sumar() {
		return this.numero1 + this.numero2;
	}
	
	
	public int multiplicar() {
		return this.numero1*this.numero2;
	}
}
