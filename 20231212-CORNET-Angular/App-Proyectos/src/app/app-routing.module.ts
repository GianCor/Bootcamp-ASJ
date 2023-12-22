import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';
import { RickAndMortyListComponent } from './components/rick-and-morty/rick-and-morty-list/rick-and-morty-list.component';
import { RickAndMortyDetailsComponent } from './components/rick-and-morty/rick-and-morty-details/rick-and-morty-details.component';
import { PipeComponent } from './components/pipe/pipe.component';

const routes: Routes = [
  {
    path: 'proyectos',
    children: [
      { path: 'to-do-list', component: ToDoListComponent },
      { path: 'simpsons-form', component: FormularioSimpsonsComponent },
      {
        path: 'rick-and-morty',
        children: [
          { path: 'lista', component: RickAndMortyListComponent },
          {
            path: 'detalles/:idCharacter',
            component: RickAndMortyDetailsComponent,
          },
          { path: '', component: RickAndMortyListComponent },
        ],
      },
      { path: 'pipes-angular', component: PipeComponent },
    ],
  },
  { path: '', component: ToDoListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
