import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';

const routes: Routes = [
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'formulario-simpsons', component: FormularioSimpsonsComponent },
  { path: '', component: ToDoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
