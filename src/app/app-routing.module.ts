import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturerComponent } from './pages/lecturer/lecturer.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassroomComponent } from './pages/classroom/classroom.component';


const routes: Routes = [
  {path: '', component: GeneratorComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'classroom', component: ClassroomComponent},
  {path: 'lecturer', component: LecturerComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
