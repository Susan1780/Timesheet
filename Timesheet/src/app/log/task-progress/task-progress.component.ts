import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { ITask } from '../../shared/modal/task';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.css']
})


export class TaskProgressComponent implements OnInit {

  
  todoForm ! :  FormGroup;
  tasks : ITask [] = [];
  inprogress : ITask[] = [];
  done: ITask [] =[];
  updateIndex!:any;
  isEditEnabled: boolean = false;
  dataStore: any[] = [];

  constructor(private service: TodoService) { }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTask(){
    this.tasks.push({
      description:this.todoForm.value.item,
      done:false
    });
    this.todoForm.reset();
    
    let data = this.todoForm.value
     this.service.addData(data).subscribe((Response: any) => {
     console.log(Response, "hei")
  })
  }


  onEdit(item:ITask, i : number){
    this.todoForm.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditEnabled = true; 
  }
  updateTask(){
    this.tasks[this.updateIndex].description = this.todoForm.value.item;
    this.tasks[this.updateIndex].done = false;
    this.todoForm.reset();
    this.updateIndex = undefined;
    this.isEditEnabled = false;
  }
}
