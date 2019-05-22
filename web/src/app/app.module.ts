import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HadeethViewModule } from './modules/hadeeth-view/hadeeth-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HadeethViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
