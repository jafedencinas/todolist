import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
   // new Todo("This is a test!", true),
   // new Todo("Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto atque ut assumenda cumque nostrum voluptates exercitationem aspernatur autem tempora reprehenderit aperiam praesentium eligendi, aut illo minima facere omnis nisi.")
  ]

  constructor() { }

  

  getAllTodos(){
    return this.todos;
  }
  addTodo(todo:Todo){
    this.todos.push(todo)
  }
  updateTodo(index:number, updateTodo: Todo){
    this.todos[index] = updateTodo

  }
  deleteTodo(index:number){
      this.todos.splice(index, 1)
  }
}
