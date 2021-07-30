import { InfyLaptopService } from './infy-laptop/infy-laptop.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfyLaptopComponent } from './infy-laptop/infy-laptop.component';
import { SuccessMessagePipe } from "./infy-laptop/success-message.pipe";


@NgModule({
  declarations: [
    AppComponent,
    InfyLaptopComponent,
    SuccessMessagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InfyLaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
