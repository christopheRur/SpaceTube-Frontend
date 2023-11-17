import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaceTubeComponent } from './components/space-tube/space-tube.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SpaceTubeComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{path:'space-tube',
    component: SpaceTubeComponent},])

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
