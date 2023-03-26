import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConverterFormComponent } from './converter-form/converter-form.component';
import { ConvertionHistoryComponent } from './convertion-history/convertion-history.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NumbersOnly } from './numbers-only.directive';

@NgModule({
  declarations: [
    ConverterFormComponent,
    ConvertionHistoryComponent,
    AppComponent,
    NumbersOnly
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
