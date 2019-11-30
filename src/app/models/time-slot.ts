export class TimeSlot {
  static data = [];
  breakAfters;
  breakDur;
  days;
  name;
  slotDuration;
  startAt;

  // static setData(data) {
  //   let result = [];
  //   data.forEach(element => {
  //     result.push(TimeSlot.deserialize(element));
  //   });
  // }

  public getSumNSlot() {
    let sum = 0;
    this.days.forEach(day => {
      sum += day.nSlot;
    });

    return sum;
  }

  static deserialize(input: any): TimeSlot {
    let result = new TimeSlot
    Object.assign(result, input);
    return result;
  }

  // static find(id): TimeSlot {
  //   return this.deserialize(Data.getTimeSlots().find(element => element.name == id));
  // }
}
