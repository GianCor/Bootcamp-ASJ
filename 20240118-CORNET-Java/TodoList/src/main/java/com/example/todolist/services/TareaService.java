package com.example.todolist.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todolist.models.TareaModel;
import com.example.todolist.repositories.TareaRepository;

@Service
public class TareaService {
	@Autowired
	TareaRepository tareaRepository;
	
    public ArrayList<TareaModel> getTareas(){
        return new ArrayList<TareaModel>(tareaRepository.findAll());
    }

    public Optional<TareaModel> getTareaByID(Integer id){
    	return tareaRepository.findById(id);
    }
    
    public TareaModel crearTarea(TareaModel tarea) {
    	tareaRepository.save(tarea);
    	return tarea;
    }
    
    public String modificarTarea(Integer id, TareaModel tarea) {
    	TareaModel t = tareaRepository.findById(id).get();
    	if(t != null) {
    		t.setTask(tarea.getTask());
    		t.setState(tarea.getState());
    		t.setDate(tarea.getDate());
    		t.setDeleted(tarea.getDeleted());
    		t.setShow(tarea.getShow());
    		tareaRepository.save(t);
    		return "Modificada correctamente";
    	}
    	return "La tarea no existe";
    }
    
    public Optional<TareaModel> eliminarTarea(Integer id) {
    	Optional<TareaModel> response = tareaRepository.findById(id);
    	tareaRepository.deleteById(id);
    	return response;
    }
}
