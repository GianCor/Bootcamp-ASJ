package com.example.todolist.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.example.todolist.models.TareaModel;
import com.example.todolist.services.TareaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tareas")
public class TareaController {
	@Autowired
	TareaService tareaService;
	
	@GetMapping("/test")
	public ResponseEntity<String> test() {
		return ResponseEntity.ok(null);
	}
	
	@GetMapping
	public ResponseEntity<ArrayList<TareaModel>> getTareas(){
		return ResponseEntity.ok(tareaService.getTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable Integer id) {
		return ResponseEntity.ok(tareaService.getTareaByID(id));
	}
	
	@PostMapping
	public TareaModel createTarea(@RequestBody TareaModel tarea) {
		return tareaService.crearTarea(tarea);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTarea(@PathVariable Integer id, @RequestBody TareaModel tarea) {
		return ResponseEntity.ok(tareaService.modificarTarea(id, tarea));
	}
	
	@DeleteMapping("/{id}")
	public Optional<TareaModel> deleteTarea(@PathVariable Integer id) {
		return tareaService.eliminarTarea(id);
	}
}
