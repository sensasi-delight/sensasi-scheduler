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
  timeSlotClass = TimeSlot;
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
    this.model = new TimeSlot;
    this.storeMode = 'create';
    $('#timeSlotFormModal').modal('show');
  }

  initUpdate(index): void {
    this.storeMode = 'update';
    this.workingIndex = index;
    Object.assign(this.model, {...this.timeSlots[index]});
    $('#timeSlotFormModal').modal('show');
  }

  storeTimeSlot(formData): void {
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

      $('#timeSlotFormModal').modal('hide');
      TimeSlot.toLocalStorage();
      formData.resetForm();

    }
  }

  initDelete(index): void {
    this.storeMode = 'delete';
    this.workingIndex = index;
    Object.assign(this.model, {...this.timeSlots[index]});
    $('#timeSlotDeleteModal').modal('show');
  }

  deleteTimeSlot(): void {
    $('#timeSlotDeleteModal').modal('hide');
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


  viewDays(index: number) {
    this.workingIndex = index;
    Object.assign(this.model, {...this.timeSlots[index]});

    $('#timeSlotCardList').addClass('d-none');
    $('#timeSlotCardSetting').removeClass('d-none');

    setTimeout(() => {
      $('#timeSlotCardSetting').addClass('show');
    }, 300);
  }

  hideDays() {
    $('#timeSlotCardSetting').removeClass('show');
    setTimeout(() => {
      $('#timeSlotCardList').removeClass('d-none');
      $('#timeSlotCardSetting').addClass('d-none');
    }, 300);
  }

  storeTimeSlotSetting(formData): void {
    Object.assign(this.timeSlots[this.workingIndex], {...this.model});
    TimeSlot.toLocalStorage();
    alert('Perubahan telah tersimpan');
  }

  toggleActive(i: number, j: number) {
    let index = i * TimeSlot.daysName.length + j - 1;
    const breakIndex = (this.model._breakAt - this.model._startAt) / this.model.slotDuration - 1;

    if (i > breakIndex) {
      index = index - TimeSlot.daysName.length;
    }

    this.model.slots[index] = !this.model.slots[index];
  }

  getTimeSlotsInput() {
    let temp = [];
    let timeTemp = this.model._startAt || 0;
    const slotTemp = this.model.slotsxxx;
    let slotIndex = 0;

    for (let i = 0; i < this.model.nSlotDay; i++) {
      let row: Array<any> = [TimeSlot.minToTime(timeTemp) + '-' + TimeSlot.minToTime(timeTemp += this.model.slotDuration || 0)];
      TimeSlot.daysName.forEach(name => {
        row.push((slotTemp[slotIndex++] || false));
      });

      temp.push(row);

      if (this.model._breakAt && timeTemp == this.model._breakAt) {
        let row: Array<any> = [TimeSlot.minToTime(timeTemp) + '-' + TimeSlot.minToTime(timeTemp += this.model.breakDuration || 0)];
        temp.push(row);
      }
    }

    return temp;
  }

  getBreakOptions() {
    let result = [];
    let temp = this.model._startAt;

    for (let index = 0; index < this.model.nSlotDay; index++) {
      result.push({
        id: index,
        text: this.timeSlotClass.minToTime(temp += this.model.slotDuration)
      });

    }
    return result;
  }
}
