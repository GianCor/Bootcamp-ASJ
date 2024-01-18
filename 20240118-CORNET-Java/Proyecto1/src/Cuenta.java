
public class Cuenta {
	private double cantidad;
	private String titular;
	Cuenta(String titular){
		this.titular = titular;
		this.cantidad = 0;
	}
	
	Cuenta(String titular, double cantidad){
		this.titular = titular;
		this.cantidad = cantidad;
	}
	
	public double getCantidad() {
		return this.cantidad;
	}
	
	public void setCantidad(float cantidad) {
		this.cantidad = cantidad;
	}
	
	public String getTitular() {
		return this.titular;
	}
	
	public void ingresar(double cantidad) {
		if(cantidad > 0) {
			this.cantidad += cantidad;
		}
	}
	
	public void retirar(double cantidad) {
		if(this.cantidad - cantidad < 0) {
			this.cantidad = 0;
		} else {
			this.cantidad -= cantidad;
		}
	}

	@Override
	public String toString() {
		return "Cuenta [cantidad=" + cantidad + ", titular=" + titular + "]";
	}
	
}
