import { Component } from '@angular/core';

interface TaskItem {
  task: string;
  date: Date;
  done: Boolean;
  deleted: Boolean;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  task: string = '';
  taskList: TaskItem[] = [];

  addTask = () => {
    if (this.task != '') {
      let newDate = new Date();
      this.taskList.push({
        task: this.task,
        date: newDate,
        done: false,
        deleted: false,
      });
      this.task = '';
    }
  };
  deleteTask = (taskItem: TaskItem) => {
    const taskIndex = this.taskList.indexOf(taskItem);
    if (taskIndex != -1) {
      this.taskList.splice(taskIndex, 1);
    }
  };
  endTask = (taskItem: TaskItem) => {
    taskItem.done = !taskItem.done;
  };

  seeTasksDone = () => {};
}
