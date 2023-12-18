import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormularioSimpsonsComponent } from './components/formulario-simpsons/formulario-simpsons.component';
import { TableSimpsonsComponent } from './components/formulario-simpsons/table-simpsons/table-simpsons.component';
import { AppRoutingModule } from './app-routing.module';
import { RickAndMortyDetailsComponent } from './components/rick-and-morty/rick-and-morty-details/rick-and-morty-details.component';
import { RickAndMortyService } from './services/rick-and-morty.service';
import { RickAndMortyListComponent } from './components/rick-and-morty/rick-and-morty-list/rick-and-morty-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ToDoListComponent,
    FormularioSimpsonsComponent,
    TableSimpsonsComponent,
    RickAndMortyDetailsComponent,
    RickAndMortyListComponent
  ],
  imports: [BrowserModule, NgbModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [RickAndMortyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
