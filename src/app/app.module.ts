import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { ConverterFormComponent } from './converter-form/converter-form.component';
import { ConvertionHistoryComponent } from './convertion-history/convertion-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectorComponent,
    ConverterFormComponent,
    ConvertionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
