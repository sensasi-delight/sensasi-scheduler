import { Component, OnInit } from '@angular/core';
import { Class, Subject } from 'src/app/models/class';
import { Lecturer } from 'src/app/models/lecturer';
import { Select2OptionData } from 'ng-select2';
import { TimeSlot } from 'src/app/models/time-slot';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: [
    './class.component.css'
  ],
})
export class ClassComponent implements OnInit {

  model: Class = new Class;
  storeMode: string;
  classes = Class.data;
  workingIndex: number;
  timeSlots: Array<TimeSlot> = TimeSlot.data;
  xclassSelectValue: number;

  constructor() {}

  ngOnInit() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
      // $('.select2basic').css('width', '100%').select2();
    });
  }

  initCreate() {
    this.isShowSubjects = false;
    this.model = new Class;
    this.storeMode = 'create';
    $('#classFormModal').modal('show');
  }

  initDelete(index): void {
    this.isShowSubjects = false;
    this.storeMode = 'delete';
    this.workingIndex = index;
    Object.assign(this.model, {...this.classes[index]});
    $('#classDeleteModal').modal('show');
  }

  initUpdate(index): void {
    this.isShowSubjects = false;
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




  // subject block

  // subjects = [];
  subjectModel = new Subject;
  subjectWorkingIndex: number;
  isShowSubjects = false;
  select2LecturerOptions: Array<Select2OptionData> = Lecturer.toSelect2Options();
  select2ClassOptions: Array<Select2OptionData> = this.classes.map((obj, index) => {
    return {
      id: index.toString(),
      text: obj.id
    };
  });


  viewSubjects(index) {
    this.workingIndex = index;
    this.isShowSubjects = true;
    Object.assign(this.model, {...this.classes[index]});
  }

  initCreateSubject() {
    this.subjectModel = new Subject;
    this.storeMode = 'create';
    $('#subjectFormModal').modal('show');
  }

  initDeleteSubject(index): void {
    this.storeMode = 'delete';
    this.subjectWorkingIndex = index;
    Object.assign(this.subjectModel, {...this.model.subjects[index]});
    $('#subjectDeleteModal').modal('show');
  }

  initUpdateSubject(index): void {
    this.storeMode = 'update';
    this.subjectWorkingIndex = index;
    Object.assign(this.subjectModel, {...this.model.subjects[index]});
    $('#subjectFormModal').modal('show');
  }

  initCopySubjects(): void {
    $('#subjectsCopyModal').modal('show');
  }

  copySubjects(index: number): void {    
    $('#subjectsCopyModal').modal('hide');
    this.classes[this.workingIndex].subjects = [];
    this.classes[index].subjects.forEach(obj => {
      this.classes[this.workingIndex].subjects.push(Object.assign(new Subject, {...obj}));
    });
    Class.toLocalStorage();
    Object.assign(this.model, {...this.classes[this.workingIndex]});
  }

  deleteSubject(): void {
    $('#subjectDeleteModal').modal('hide');
    this.classes[this.workingIndex].subjects.splice(this.subjectWorkingIndex, 1);
    Class.toLocalStorage();
  }

  storeSubject(formData): void {

    // this.checkUnique(formData);

    if (formData.form.valid) {
      switch (this.storeMode) {
        case 'create':
          this.classes[this.workingIndex].subjects.push(Object.assign(new Subject, {...this.subjectModel}));
          break;

        case 'update':
          Object.assign(this.classes[this.workingIndex].subjects[this.subjectWorkingIndex], {...this.subjectModel});
          break;

        default:
          break;
      }

      $('#subjectFormModal').modal('hide');
      Class.toLocalStorage();
      formData.resetForm();

    }
  }

}
