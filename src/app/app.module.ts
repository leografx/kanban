import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SortableModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SortableModule.forRoot(),
    AngularFireModule.initializeApp(environment.angFireConfig,'kanban')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
