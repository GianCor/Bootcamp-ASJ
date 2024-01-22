package com.example.proyecto.HolaMundo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
public class HolaMundoController {
	@GetMapping("/saludo/{nombre}")
	public String saludar(@PathVariable String nombre) {
		return "Hola " + nombre + " mira este cambio que hago";
	}
}
