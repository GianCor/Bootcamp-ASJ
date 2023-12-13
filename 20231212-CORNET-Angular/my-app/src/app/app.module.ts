import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { PricesComponent } from './components/prices/prices.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchbarComponent} from './components/searchbar/searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    PricesComponent,
    CarouselComponent,
    SearchbarComponent,
    FooterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
