import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Http
import { HttpClientModule } from '@angular/common/http';

// Services
import { NewsService } from './services/news.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from '././views/new/new.component';
import { ArchivedComponent } from '././views/archived/archived.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ArchivedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
