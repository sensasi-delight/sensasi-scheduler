import { environment } from 'src/environments/environment';

export class TimeSlot {
  breakAfters;
  breakDur;
  days;
  name;
  slotDuration;
  startAt;

  static data = (() => {
    return TimeSlot.getData();
  })();

  static refreshData() {
    TimeSlot.data = TimeSlot.getData();
  };

  private static getData() {
    let result = [];
    const local = JSON.parse(localStorage.getItem(environment.localStorageItemName));

    if (local && local['timeSlots']) {
      local['timeSlots'].forEach(element => {
        let temp = new TimeSlot;
        Object.assign(temp, element);
        result.push(temp);
      });
    }

    return result;
  }

  static toLocalStorage() {
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['timeSlots'] = TimeSlot.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }

  getSumNSlot() {
    let sum = 0;
    this.days.forEach(day => {
      sum += day.nSlot;
    });

    return sum;
  }
}
