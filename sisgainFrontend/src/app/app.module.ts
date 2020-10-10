import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocterDetailsCardComponent } from './docter-details-card/docter-details-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppService } from './app.service';
import { MessageService } from './_shared/services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DocterDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule, 
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AppService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
