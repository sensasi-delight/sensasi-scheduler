import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LecturerComponent } from './pages/lecturer/lecturer.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';
import { ClassComponent } from './pages/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    AboutComponent,
    GeneratorComponent,
    ClassroomComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
