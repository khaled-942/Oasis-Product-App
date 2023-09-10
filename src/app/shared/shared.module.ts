import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    CurrencyPipe,
    TruncatePipe
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
    TruncatePipe
  ]
})
export class SharedModule { }
