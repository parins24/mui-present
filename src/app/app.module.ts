import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageComponent } from './package/package.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageComponent,
    CardComponent
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
