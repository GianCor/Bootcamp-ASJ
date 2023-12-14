import { Component } from '@angular/core';

interface TaskItem {
  task: string;
  date: Date;
  done: Boolean;
  deleted: Boolean;
  show: Boolean;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
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
    if (this.task != '') {
      let newDate = new Date();
      this.taskList.push({
        task: this.task,
        date: newDate,
        done: false,
        deleted: false,
        show: true,
      });
      this.task = '';
    }
  };

  deleteTask = (taskItem: TaskItem) => {
    taskItem.deleted = true;
    taskItem.show = false;
    console.log(this.deletedActive)
    if(this.deletedActive){
      const taskIndex = this.taskList.indexOf(taskItem)
      if (taskIndex > -1) {
        this.taskList.splice(taskIndex, 1);
        console.log('Elemento eliminado:', taskItem);
      }
    }
  };

  endTask = (taskItem: TaskItem) => {
    taskItem.done = !taskItem.done;
  };

  showDeleted = () => {
    this.taskList.forEach((task) => {
      task.deleted == true ? (task.show = true) : (task.show = false);
    });
    this.deletedActive = true;
  };

  showDone = () => {
    this.taskList.forEach((task) => {
      task.done == true && task.deleted == false
        ? (task.show = true)
        : (task.show = false);
    });
    this.deletedActive = false;
  };

  showAll = () => {
    this.taskList.forEach((task) => {
      task.show = true;
    });
    this.deletedActive = false;
  };

  showPending = () => {
    this.taskList.forEach((task) => {
      task.done == false && task.deleted == false
        ? (task.show = true)
        : (task.show = false);
    });
    this.deletedActive = false;
  };
}
