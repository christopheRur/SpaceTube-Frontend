import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaceTubeComponent } from './components/space-tube/space-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceTubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
