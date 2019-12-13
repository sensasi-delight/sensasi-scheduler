import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { StudyProgram } from 'src/app/models/study-program';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  model: Class = new Class;
  storeMode: string;
  classes = Class.data;
  studyPrograms = StudyProgram.data;
  workingIndex: number;

  constructor() {}

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  initCreate() {
    this.model = new Class;
    this.storeMode = 'create';
    $('#classFormModal').modal('show');
  }

  initDelete(index): void {
    this.storeMode = 'delete';
    this.workingIndex = index;
    Object.assign(this.model, {...this.classes[index]});
    $('#classDeleteModal').modal('show');
  }

  initUpdate(index): void {
    this.storeMode = 'update';
    this.workingIndex = index;
    Object.assign(this.model, {...this.classes[index]});
    $('#classFormModal').modal('show');
  }

  storeClass(formData): void {
    this.checkUnique(formData);

    if (formData.form.valid) {
      switch (this.storeMode) {
        case 'create':
          let newClass = new Class;
          Object.assign(newClass, {...this.model});
          this.classes.push(newClass);

          break;

        case 'update':
          Object.assign(this.classes[this.workingIndex], {...this.model});
          break;

        default:
          break;
      }

      $('#classFormModal').modal('hide');
      Class.toLocalStorage();
      formData.resetForm();

    }
  }

  deleteClass(): void {
    $('#classDeleteModal').modal('hide');
    this.classes.splice(this.workingIndex, 1);
    Class.toLocalStorage()
  }

  private checkUnique(formData) {
    for (const key in formData.form.controls) {
      this.classes.forEach((item, index) => {
        if (Class.uniqueKeys.indexOf(key) != -1) {
          if (item[key] == formData.form.controls[key].value) {
            if (this.storeMode == 'create' || (this.storeMode == 'update' && this.workingIndex != index)) {
              formData.form.controls[key].setErrors({unique: true})
            }
          }
        }
      });
    }
  }

}
