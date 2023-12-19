import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UsersFormComponent } from './components/users/users-form/users-form.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'user',
    children: [
      { path: '', component: UsersFormComponent },
      { path: ':id', component: UsersFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
