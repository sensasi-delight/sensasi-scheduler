export class Data {
  private static data = Data.init();
  private static lecturers = Data.data['lecturers'];


  private static init() {
    let temp = JSON.parse(localStorage.getItem('sensasiSchedulerData'));

    if (temp == null || temp.length === 0) {
      return {
        lecturers: []
      };
    } else {
      return {
        lecturers: temp['lecturers'] == null ? [] : temp['lecturers']
      }
    }
  }

  static getLecturers() {
    return this.lecturers;
  }

  static toLocalStorage () {
    localStorage.setItem('sensasiSchedulerData', JSON.stringify(Data.data));
  }
}
