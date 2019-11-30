import { Component, OnInit } from '@angular/core';
import { Data } from "../../classes/data";

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})

export class LecturerComponent implements OnInit {
  model: any;
  storeMode: string;
  lecturers = Data.master.lecturers;
  workingIndex;

  constructor() {
    this.resetModel();
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  initCreate() {
    this.storeMode = 'create';
    this.resetModel();
    $('#lecturerFormModal').modal('show');
  }

  initDelete(index): void {
    this.storeMode = 'delete';
    this.workingIndex = index;
    this.model = {...this.lecturers[index]};
    $('#lecturerDeleteModal').modal('show');
  }

  initUpdate(index): void {
    this.storeMode = 'update';
    this.workingIndex = index;
    this.model = {...this.lecturers[index]};
    $('#lecturerFormModal').modal('show');
  }

  storeLecturer(formData): void {
    if (this.storeMode == 'create') {
      this.checkUnique(formData);
    }

    if (formData.form.valid) {
      switch (this.storeMode) {
        case 'create':
          this.lecturers.push(formData.form.value);

          break;

        case 'update':
          this.lecturers[this.workingIndex] = {...this.model};
          break;

        default:
          break;
      }

      $('#lecturerFormModal').modal('hide');
      formData.resetForm();
      Data.toLocalStorage();
    }
  }

  deleteLecturer(): void {
    $('#lecturerDeleteModal').modal('hide');
    this.lecturers.splice(this.workingIndex, 1);
    Data.toLocalStorage()
  }

  private resetModel():void {
    this.model = {
      id: null,
      name:null
    };
  }

  private checkUnique(formData) {
    for (const key in formData.form.controls) {
      let isExist = this.lecturers.filter(lecturer =>  lecturer[key] == formData.form.controls[key].value ).length > 0;

      if (isExist) {
        formData.form.controls[key].setErrors({unique: true})
      }
    }
  }
}
