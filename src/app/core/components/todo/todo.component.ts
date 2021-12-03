import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() public todo: Todo | undefined;
  @Output() public deleteEmitter: EventEmitter<number | undefined> =
    new EventEmitter<number | undefined>();

  public delete(id: number | undefined): void {
    this.deleteEmitter.emit(id);
  }
}
