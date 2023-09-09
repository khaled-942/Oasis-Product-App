import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from './pipes/currency.pipe';


@NgModule({
  declarations: [
    CurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CurrencyPipe,
  ]
})
export class SharedModule { }
