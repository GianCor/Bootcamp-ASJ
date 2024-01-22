package com.example.proyecto.controllers;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.proyecto.models.Alumno;

@RestController
public class AlumnoController {
	
	ArrayList<Alumno> alumnos = new ArrayList<Alumno>(
				List.of(new Alumno(1 ,"Bob", "Patiño", 9.4),
						new Alumno(2 ,"Lisa", "Simspon", 9.3),
						new Alumno(3 ,"Bart", "Simpson", 5.2),
						new Alumno(4 ,"Edna", "Clavados", 7.6),
						new Alumno(5 ,"Pedro", "Pistola", 10))
			);
	
	@GetMapping("/alumnos")
	public ArrayList<Alumno> getListAlumnos() {
		return alumnos;
	}
	
	@GetMapping("/alumnos/{id}")
	public Alumno getAlumno(@PathVariable int id) {
		for (Alumno alumno : alumnos) {
			if(alumno.getId() == id) {
				return alumno;
			}
		}
		return null;
	}
	
	@DeleteMapping("/alumnos/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		for(Alumno alumno : alumnos) {
			if(alumno.getId() == id) {
				alumnos.remove(alumnos.indexOf(alumno));
				return "";
			}
		}
		return null;
	}
	
	@PostMapping("/alumnos")
	public Alumno postAlumno(@RequestBody Alumno alumno) {
		System.out.println(alumno);
	    alumnos.add(alumno);
	    return alumno;
	}
	
	@PutMapping("/alumnos/{id}")
	public String putAlumnoById(@PathVariable int id, @RequestBody Alumno alumnoEdited) {
		for(Alumno alumno : alumnos) {
			if(alumno.getId() == id) {
				alumnos.set(alumnos.indexOf(alumno), alumnoEdited);
				return "Success";
			}
		}
		return null;
	}
	
}
