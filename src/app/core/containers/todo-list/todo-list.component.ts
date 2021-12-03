import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoList: Todo[] = [];

  public todoToAdd: Todo = {
    id: 4,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  };

  public ngOnInit(): void {
    this.todoList = [
      {
        id: 1,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      },
      {
        id: 2,
        description:
          'At dignissimos eligendi aliquid molestias vitae facilis asperiores sapiente.',
      },
      {
        id: 3,
        description:
          'Earum voluptates sed culpa fugit quaerat, ex ad adipisci. Neque doloribus minus similique.',
      },
    ];
  }

  public deleteTodo(id: number | undefined): void {
    this.todoList = this.todoList.filter((todo: Todo) => todo.id !== id);
  }
}
