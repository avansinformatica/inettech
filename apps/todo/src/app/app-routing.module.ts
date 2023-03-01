import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TodoEditComponent } from './pages/todo/todo-edit/todo-edit.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'todos', pathMatch: 'full', component: TodoListComponent },
  { path: 'todos/new', pathMatch: 'full', component: TodoEditComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
