import { Component, OnInit } from '@angular/core';
import { Lecturer } from 'src/app/models/lecturer';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})

export class LecturerComponent implements OnInit {
  model: Lecturer = new Lecturer;
  storeMode: string;
  lecturers = Lecturer.data;
  workingIndex: number;

  constructor() {}

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  initCreate() {
    this.model = new Lecturer;
    this.storeMode = 'create';
    $('#lecturerFormModal').modal('show');
  }

  initDelete(index): void {
    this.storeMode = 'delete';
    this.workingIndex = index;
    Object.assign(this.model, {...this.lecturers[index]});
    $('#lecturerDeleteModal').modal('show');
  }

  initUpdate(index): void {
    this.storeMode = 'update';
    this.workingIndex = index;
    Object.assign(this.model, {...this.lecturers[index]});
    $('#lecturerFormModal').modal('show');
  }

  storeLecturer(formData): void {
    this.checkUnique(formData);

    if (formData.form.valid) {
      switch (this.storeMode) {
        case 'create':
          let newLecturer = new Lecturer;
          Object.assign(newLecturer, {...this.model})
          this.lecturers.push(newLecturer);

          break;

        case 'update':
          Object.assign(this.lecturers[this.workingIndex], {...this.model});
          break;

        default:
          break;
      }

      $('#lecturerFormModal').modal('hide');
      formData.resetForm();
      Lecturer.toLocalStorage();
    }
  }

  deleteLecturer(): void {
    $('#lecturerDeleteModal').modal('hide');
    this.lecturers.splice(this.workingIndex, 1);
    Lecturer.toLocalStorage();
  }

  private checkUnique(formData) {
    for (const key in formData.form.controls) {
      this.lecturers.forEach((lecturer, index) => {
        if (Lecturer.uniqueKeys.indexOf(key) != -1) {
          if (lecturer[key] == formData.form.controls[key].value) {
            if (this.storeMode == 'create' || (this.storeMode == 'update' && this.workingIndex != index)) {
              formData.form.controls[key].setErrors({unique: true})
            }
          }
        }
      });
    }
  }
}
