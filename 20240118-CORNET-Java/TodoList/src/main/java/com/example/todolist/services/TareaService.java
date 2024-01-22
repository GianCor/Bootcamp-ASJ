package com.example.todolist.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todolist.models.TareaModel;
import com.example.todolist.repositories.TareaRepository;

@Service
public class TareaService {
	@Autowired
	TareaRepository tareaRepository;
	
    public ArrayList<TareaModel> getTareas(){
        return new ArrayList<>(tareaRepository.findAll());
    }

    
}
