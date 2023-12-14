import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';
import { TableSimpsonsComponent } from './components/formulario-simpsons/table-simpsons/table-simpsons.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ToDoListComponent,
    FormularioSimpsonsComponent,
    TableSimpsonsComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
