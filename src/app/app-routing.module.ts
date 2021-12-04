import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularWelcomePageComponent } from './core/components/angular-welcome-page/angular-welcome-page.component';
import { TodoListComponent } from './core/containers/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,
  },
  {
    path: 'welcome',
    component: AngularWelcomePageComponent,
  },
  {
    path: 'cosmos',
    loadChildren: () =>
      import('./cosmos/cosmos.module').then((m: any) => m.CosmosModule),
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
