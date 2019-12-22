import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LecturerComponent } from './pages/lecturer/lecturer.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ClassComponent } from './pages/class/class.component';
import { TimeSlotComponent } from './pages/time-slot/time-slot.component';
import { RoomComponent } from './pages/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    AboutComponent,
    GeneratorComponent,
    RoomComponent,
    ClassComponent,
    TimeSlotComponent,
    RoomComponent
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
