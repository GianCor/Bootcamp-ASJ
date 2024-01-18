public class Superheroe {
    private String Nombre;
    private String Descripcion;
    private boolean Capa;

    public Superheroe(String nombre) {
        this.Nombre = nombre;
        this.Descripcion = "";
        this.Capa = false;
    }

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }

    public boolean isCapa() {
        return Capa;
    }

    public void setCapa(boolean capa) {
        Capa = capa;
    }

    @Override
    public String toString() {
        return "Superheroe [Nombre=" + Nombre + ", Descripción=" + Descripcion + ", Capa=" + Capa + "]";
    }



}
