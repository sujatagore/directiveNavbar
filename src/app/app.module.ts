import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarDirective } from './shared/directive/navbar.directive';
import { CreditCardDirective } from './shared/directive/creditcard.directive';
import { ToLowerCaseDirective } from './shared/directive/tolowercase.directive';
import { HighlightDirective } from './shared/directive/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDirective,
    CreditCardDirective,
    ToLowerCaseDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
