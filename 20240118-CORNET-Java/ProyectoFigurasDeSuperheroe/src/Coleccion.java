import java.util.ArrayList;
import java.lang.StringBuilder;

public class Coleccion {
    private String nombreColeccion;
    private ArrayList<Figura> listaFigura;

    public Coleccion(String nombreColeccion) {
        this.nombreColeccion=nombreColeccion;
        this.listaFigura=new ArrayList<Figura>();
    }

    public String getNombreColeccion() {
        return nombreColeccion;
    }

    public void setNombreColeccion(String nombreColeccion) {
        this.nombreColeccion = nombreColeccion;
    }

    public void añadirFigura(Figura fig) {
        listaFigura.add(fig);
    }
    
    public void subirPrecio(double cantidad, String id) {
    	for(Figura fig : listaFigura) {
    		if(fig.getCodigo() == id ) {
    			fig.subirPrecio(cantidad);
    		}
    	}
    }

    public void conCapa() {
    	StringBuilder builder = new StringBuilder();
    	for(Figura fig : listaFigura) {
    		if(fig.getSuperheroe().isCapa()) {
    			builder.append(fig.getSuperheroe().toString() + "\n");
    		}
    	}
    	System.out.println(builder);
    }
    
	@Override
	public String toString() {
		return "Coleccion [nombreColeccion=" + nombreColeccion + ", listaFigura=" + listaFigura.toString() + "]";
	}
    
}