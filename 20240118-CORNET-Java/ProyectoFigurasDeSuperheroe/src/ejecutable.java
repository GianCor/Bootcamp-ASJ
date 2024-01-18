
public class ejecutable {

	public static void main(String[] args) {
		Superheroe superman = new Superheroe("Superman");
		superman.setCapa(true);
		superman.setDescripcion("Es superman, es clark kent tambien");
		
		Superheroe spiderman = new Superheroe("Spiderman");
		spiderman.setCapa(false);
		spiderman.setDescripcion("Es rojo");
		
		Superheroe batman = new Superheroe("Batman");
		batman.setCapa(true);
		batman.setDescripcion("El señor de la noche");
		
		Superheroe mujerMaravilla = new Superheroe("La mujer maravilla");
		mujerMaravilla.setCapa(true);
		mujerMaravilla.setDescripcion("Es la mujer maravilla autoexplicativo");
		
		Superheroe bane = new Superheroe("Bane");
		bane.setCapa(false);
		bane.setDescripcion("AGUANTE BANEEE");
		
		Superheroe deadpool = new Superheroe("Deadpool");
		deadpool.setCapa(false);
		deadpool.setDescripcion("El unico que vale la pena de marvel junto a spiderman");
		
		
		Dimension dimension1 = new Dimension(100.2, 23, 42);
		Dimension dimension2 = new Dimension(50.5, 20, 100);
		
		Figura figura1 = new Figura("0001a", 40000, superman, dimension1);
		Figura figura2 = new Figura("0002a", 2300, spiderman, dimension1);
		Figura figura3 = new Figura("0003a", 412000, batman, dimension1);
		Figura figura4 = new Figura("0004a", 45100, mujerMaravilla, dimension1);
		Figura figura5 = new Figura("0005a", 46400, bane, dimension1);
		Figura figura6 = new Figura("0006a", 23400, bane, dimension2);
		Figura figura7 = new Figura("0007a", 21453, deadpool, dimension1);
		
		Coleccion marvel = new Coleccion("marvel");
		marvel.añadirFigura(figura2);
		marvel.añadirFigura(figura7);
		
		Coleccion dc = new Coleccion("dc");
		dc.añadirFigura(figura1);
		dc.añadirFigura(figura3);
		dc.añadirFigura(figura4);
		dc.añadirFigura(figura5);
		dc.añadirFigura(figura6);
		
		System.out.println(dc.toString());;
		
	}

}
