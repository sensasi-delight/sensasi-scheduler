import { Component, OnInit } from '@angular/core';
// import { Class, Subject } from 'src/app/models/class';
// import { Lecturer } from 'src/app/models/lecturer';
// import { Select2OptionData } from 'ng-select2';
import { TimeSlot } from 'src/app/models/time-slot';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent implements OnInit {

  model: TimeSlot = new TimeSlot;
  storeMode: string;
  timeSlots = TimeSlot.data;
  workingIndex: number;

  constructor() {}

  ngOnInit() {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  initCreate() {
    // this.isShowSubjects = false;
    this.model = new TimeSlot;
    this.storeMode = 'create';
    $('#classFormModal').modal('show');
  }

  initDelete(index): void {
    // this.isShowSubjects = false;
    this.storeMode = 'delete';
    this.workingIndex = index;
    Object.assign(this.model, {...this.timeSlots[index]});
    $('#classDeleteModal').modal('show');
  }

  initUpdate(index): void {
    // this.isShowSubjects = false;
    this.storeMode = 'update';
    this.workingIndex = index;
    Object.assign(this.model, {...this.timeSlots[index]});
    $('#classFormModal').modal('show');
  }

  storeClass(formData): void {
    this.checkUnique(formData);

    if (formData.form.valid) {
      switch (this.storeMode) {
        case 'create':
          let newTimeSlot = new TimeSlot;
          Object.assign(newTimeSlot, {...this.model});
          this.timeSlots.push(newTimeSlot);

          break;

        case 'update':
          Object.assign(this.timeSlots[this.workingIndex], {...this.model});
          break;

        default:
          break;
      }

      $('#classFormModal').modal('hide');
      TimeSlot.toLocalStorage();
      formData.resetForm();

    }
  }

  paramChange() {
    this.model.updateActiveSlot();
  }

  deleteClass(): void {
    $('#classDeleteModal').modal('hide');
    this.timeSlots.splice(this.workingIndex, 1);
    TimeSlot.toLocalStorage();
  }

  private checkUnique(formData) {
    for (const key in formData.form.controls) {
      this.timeSlots.forEach((item, index) => {
        if (TimeSlot.uniqueKeys.indexOf(key) != -1) {
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
  // subjectModel = new Subject;
  // subjectWorkingIndex: number;
  // select2LecturerOptions: Array<Select2OptionData> = Lecturer.toSelect2Options();
  // select2ClassOptions: Array<Select2OptionData> = this.timeSlots.map((obj, index) => {
  //   return {
  //     id: index.toString(),
  //     text: obj.id
  //   };
  // });


  viewDays(index) {
    this.workingIndex = index;
    Object.assign(this.model, {...this.timeSlots[index]});
    // this.activeTemp = [...this.timeSlots[index]._activeSlots];


    // UI BLOCK
    $('#timeSlotCardList').addClass('d-none');
    $('#timeSlotCardSetting').removeClass('d-none');

    setTimeout(() => {
      $('#timeSlotCardSetting').addClass('show');
    }, 300);
    // /UI BLOCK
  }

  hideDays() {
    // this.workingIndex = index;
    // Object.assign(this.model, {...this.timeSlots[index]});

    $('#timeSlotCardSetting').removeClass('show');
    setTimeout(() => {
      $('#timeSlotCardList').removeClass('d-none');
      $('#timeSlotCardSetting').addClass('d-none');
    }, 300);
  }



  // activeTemp;

  toggleActive(i, j) {
    // console.log(i, j);
    this.model.activeSlots[i][j] = !this.model.activeSlots[i][j];
  }

  storeTimeSlotSetting(formData): void {
    Object.assign(this.timeSlots[this.workingIndex], {...this.model});

    // console.log(this.model);


  //   // this.checkUnique(formData);

  //   if (formData.form.valid) {
  //     switch (this.storeMode) {
  //       case 'create':
  //         this.timeSlots[this.workingIndex].subjects.push(Object.assign(new Subject, {...this.subjectModel}));
  //         break;

  //       case 'update':
  //         Object.assign(this.timeSlots[this.workingIndex].subjects[this.subjectWorkingIndex], {...this.subjectModel});
  //         break;

  //       default:
  //         break;
  //     }

      // $('#subjectFormModal').modal('hide');
      TimeSlot.toLocalStorage();
      alert('Perubahan telah tersimpan');
      // formData.resetForm();

  //   }
  }

  // timeChange(event) {
  //   this.model.startAt = event.viewModel;
  //   console.log(this.model);

  // }

}
