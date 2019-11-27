import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LecturerComponent } from './pages/lecturer/lecturer.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ClassesComponent } from './pages/classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    AboutComponent,
    GeneratorComponent,
    ClassroomComponent,
    ClassesComponent
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
