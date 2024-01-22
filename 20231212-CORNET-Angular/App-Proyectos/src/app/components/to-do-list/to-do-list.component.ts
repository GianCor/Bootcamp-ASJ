import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

interface TaskItem {
  id: number;
  task: string;
  date: Date;
  state: Boolean;
  deleted: Boolean;
  show: Boolean;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit{

  constructor(private todoListService:  TodoListService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadTaskList();
  }

  

  buttonState: string = 'all';
  task: string = '';
  taskList: TaskItem[] = [];
  showAllTasks: boolean = true;
  showCompletedTasks: boolean = false;
  showDeletedTasks: boolean = false;
  deletedActive: boolean = false;
  pendingActive: boolean = false;
  doneActive: boolean = false;
  allActive: boolean = true;

  addTask = () => {
    if (this.task !== '') {
      const newDate = new Date();
      const newTask = {
        task: this.task,
        date: newDate,
        state: false,
        deleted: false,
        show: true,
      };
  
      this.todoListService.postTareas(newTask).subscribe((response) => {
        this.taskList.push(response);
        this.task = '';
      });
    }
    this.buttonState = "pending"
    console.log(this.buttonState)
  }
  
  private loadTaskList() {
    this.todoListService.getTareas().subscribe(
      (taskList) => {
        this.taskList = taskList;
        console.log(this.taskList)
        this.showAll();
      }
    );
  }

  deleteTask = (taskItem: TaskItem) => {
    if(!this.deletedActive && taskItem.deleted == false){
      taskItem.show = !taskItem.show
      taskItem.deleted = true;
      this.todoListService.putTareas(taskItem).subscribe()
    }else{
      const taskIndex = this.taskList.indexOf(taskItem)
      if (taskIndex > -1) {
        if(this.taskList[taskIndex].id != undefined){
          this.todoListService.deleteTareas(this.taskList[taskIndex].id).subscribe((response)=>{
          });

        }
        this.taskList.splice(taskIndex, 1)
      }
    }
  };

  endTask = (taskItem: TaskItem) => {
    taskItem.state = !taskItem.state;
    taskItem.show = true;
    this.todoListService.putTareas(taskItem).subscribe((response) => console.log(response))
  };

  showDeleted = () => {
    this.taskList.forEach((task) => {
      task.deleted == true ? (task.show = true) : (task.show = false);
    });
    this.deletedActive = true;
    this.buttonState = 'deleted';
  };

  showDone = () => {
    this.taskList.forEach((task) => {
      task.state == true && task.deleted == false
        ? (task.show = true)
        : (task.show = false);
    });
    this.deletedActive = false;
    this.buttonState = 'done';
  };

  showAll = () => {
    this.taskList.forEach((task) => {
      task.show = true;
    });
    this.deletedActive = false;
    this.buttonState = 'all';
  };

  showPending = () => {
    this.taskList.forEach((task) => {
      task.state == false && task.deleted == false
        ? (task.show = true)
        : (task.show = false);
    });
    this.deletedActive = false;
    this.buttonState = 'pending';
  };

  lastDeleted = () =>{
    let indexOfLastDeleted = this.taskList.map(lastDeleted => lastDeleted.deleted).lastIndexOf(false);
    return indexOfLastDeleted
  }

  arrFunctions: (() => void)[] = [this.showAll, this.showPending, this.showDone, this.showDeleted];
  lastIndex: number = 0;

  navigation(tecla: string) {
    switch (tecla) {
      case 'ArrowLeft':
        this.lastIndex = (this.lastIndex - 1 + this.arrFunctions.length) % this.arrFunctions.length;
        break;
      case 'ArrowRight':
        this.lastIndex = (this.lastIndex + 1) % this.arrFunctions.length;
        break;
    }

    this.arrFunctions[this.lastIndex]();
  }
}
