package com.example.todolist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todolist.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer>{

}
