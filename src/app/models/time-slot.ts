import { environment } from 'src/environments/environment';

export class TimeSlot {
  id: string;
  name: string;
  slotDuration: number; //in minute
  _startAt: number;
  _breakAfter: any;
  breakDur: number;
  daysName = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu'
  ];

  activeSlots: Array<Array<any>>;

  nSlotDay: number;

  // get activeSlots() {
  //   if (!this._activeSlots || this._activeSlots.length !== this.nSlotDay + 1) {
  //     this._activeSlots = this.createActiveSlot();
  //   }

  //   return this._activeSlots;
  // }

  updateActiveSlot() {
    this.activeSlots = this.createActiveSlot();
  }

  createActiveSlot() {
    let temp = [];
    let timeTemp = this._startAt || 0;
    let activeSlotsTemp = this.activeSlots || [];
    activeSlotsTemp.length = this.nSlotDay || 0;


    for (let i = 0; i < activeSlotsTemp.length; i++) {
      const test = activeSlotsTemp[i] || [];
      // let row = [];
      let row: Array<any> = [this.minToTime(timeTemp) + '-' + this.minToTime(timeTemp += this.slotDuration || 0)];
      this.daysName.forEach((name, j) => {
        row.push((test[j + 1] || false));
      });

      temp.push(row);

      if (i == this._breakAfter) {
        let row: Array<any> = [this.minToTime(timeTemp) + '-' + this.minToTime(timeTemp += this.breakDur || 0)];
        temp.push(row);
      }
    }

    return temp;
  }

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
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['timeSlots'] = TimeSlot.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }

  private timeToMin(strTime: string): number {
    const temp = strTime.split(':');
    return parseInt(temp[0]) * 60 + parseInt(temp[1]);
  }

  private minToTime(num) {
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

  getBreakOptions() {
    let result = [];
    let temp = this._startAt;

    for (let index = 0; index < this.nSlotDay; index++) {
      result.push({
        id: index,
        text: this.minToTime(temp += this.slotDuration)
      });

    }

    return result;
  }

  getBreakTime() {
    return this.minToTime((this._startAt || 0 ) + (this.slotDuration || 0) * (1 * (this._breakAfter || 0) + 1));
  }

  getSumNSlot() {
    let sum = 0;

    this.activeSlots.forEach(time => {
      sum += time.filter(set => set == true).length;
    });

    return sum;
  }




  //GETTER
  get startAt(): string {
    return this.minToTime(this._startAt || 0);
  }

  get breakAfter() {
    return this._breakAfter;
  }


  //SETTER
  set breakAfter(param: number) {
    this._breakAfter = param;
    this.updateActiveSlot();
  }

  set startAt(strTime: string) {
    const temp = strTime || '00:00';
    this._startAt = this.timeToMin(temp);
  }


  // function
}

