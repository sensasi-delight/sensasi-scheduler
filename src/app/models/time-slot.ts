import { environment } from 'src/environments/environment';
import { Class } from './class';

export class TimeSlot {
  id: string;
  name: string;
  slotDuration: number; //in minute
  _startAt: number; //in minute, from (00:00 * 60) to (23:59 * 60)
  _breakAt: number; //in minute, from (00:00 * 60) to (23:59 * 60)
  breakDuration: number; //in minute
  nSlotDay: number;
  slots: Array<boolean>;

  static daysName = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu'
  ];

  static data = (() => {
    return TimeSlot.getData();
  })();

  static uniqueKeys = [
    'id'
  ];

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
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName)) || {};
    local.timeSlots = TimeSlot.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }

  static timeToMin(strTime: string): number {
    const temp = strTime.split(':');
    return parseInt(temp[0]) * 60 + parseInt(temp[1]);
  }

  static minToTime(num) {
    let h: any = Math.floor(num / 60);
    let m: any = num % 60;

    if (h <= 9) {
      h = '0' + h;
    }

    if (m <= 9) {
      m = '0' + m;
    }

    return h + ':' + m;
  }

  getSumNSlot() {
    const temp = this.slots || [];
    return temp.filter(slot => slot == true).length;
  }

  get slotsxxx() {
    if (!this.slots) {
      this.slots = [].constructor((this.nSlotDay || 0) * 7);
    } else if (this.slots.length != ((this.nSlotDay || 0) * 7)) {
      this.slots.length = (this.nSlotDay || 0) * 7;
    }

    return this.slots;
  }

  getDayName(index) {
    return TimeSlot.daysName[Math.floor((index)/this.nSlotDay)];
  }

  getTime(index) {
    const timeIndex = index % this.nSlotDay;
    const breakIndex = (this._breakAt - this._startAt) / this.slotDuration - 1;

    if (timeIndex > breakIndex) {
      return TimeSlot.minToTime(timeIndex * this.slotDuration + this._startAt + this.breakDuration);
    } else {
      return TimeSlot.minToTime(timeIndex * this.slotDuration + this._startAt);
    }
  }

  //GETTER
  get startTime(): string {
    return TimeSlot.minToTime(this._startAt || 0);
  }

  get breakTime(): string {
    if (this._breakAt) {
      return TimeSlot.minToTime(this._breakAt);
    } else {
      return null;
    }
  }

  get classes(): Array<Class> {
    return Class.data.filter(classObj => classObj.timeSlotId == this.id)
  }

  //SETTER
  set startTime(strTime: string) {
    const temp = strTime || '00:00';
    this._startAt = TimeSlot.timeToMin(temp);
  }
}

