import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [FormsModule,CommonModule],
  templateUrl: './crud-opretion.html',
  styleUrl: './crud-opretion.css'
})
export class CrudOpretion {
  tasks: any[] = [];

  taskName = '';
  
  editingTaskId: number | null = null;

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    const data = localStorage.getItem('tasks');
    this.tasks = data ? JSON.parse(data) : [];
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask() {
    this.tasks.push({name: this.taskName });
    this.taskName = '';
  }

  editTask(task: any) {
    this.taskName = task.name;
    this.editingTaskId = task.id;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();
  }

}
