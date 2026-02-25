import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
=======
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
>>>>>>> 0c68f1b (initial commit)

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
=======
    provideClientHydration(withEventReplay()),
>>>>>>> 0c68f1b (initial commit)
  ],
  bootstrap: [App]
})
export class AppModule { }
