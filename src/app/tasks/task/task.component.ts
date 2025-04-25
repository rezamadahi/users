import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  private tasksService = inject(TasksService);
  @Input() task!: Task;
  // @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }

}
