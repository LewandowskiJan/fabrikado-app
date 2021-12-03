import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularWelcomePageComponent } from './components/angular-welcome-page/angular-welcome-page.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';

@NgModule({
  declarations: [AngularWelcomePageComponent, TodoListComponent, TodoComponent],
  exports: [AngularWelcomePageComponent, TodoListComponent],
  imports: [CommonModule],
})
export class CoreModule {}
