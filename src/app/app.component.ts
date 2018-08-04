import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo';
  todoList: any = [];
  itemObj: any = {};
  todoItem: string;
  addTodo(){
    if(this.todoItem.trim().length){
      this.itemObj = {
        value: this.todoItem,
        checked: false
      };
      this.todoList.push(this.itemObj);
      this.todoItem= null;
    }
  }
}
