import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerComponent } from './pages/lecturer/lecturer.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { RoomComponent } from './pages/room/room.component';
import { ClassComponent } from './pages/class/class.component';
import { TimeSlotComponent } from './pages/time-slot/time-slot.component';

const routes: Routes = [
  {path: '', component: GeneratorComponent},
  {path: 'class', component: ClassComponent},
  {path: 'room', component: RoomComponent},
  {path: 'lecturer', component: LecturerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'time-slot', component: TimeSlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
