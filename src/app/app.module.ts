import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { FormsModule } from '@angular/forms';
import { SubractionComponent } from './subraction/subraction.component';
import { DivisionComponent } from './division/division.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { ModuloDivisionComponent } from './moduloDivision/modulo.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubractionComponent,
    DivisionComponent,
    MultiplicationComponent,
    ModuloDivisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
