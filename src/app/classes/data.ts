import { TimeSlot } from '../models/time-slot';

export class Data {
  private static localStorageItemName = 'sensasiSchedulerData';
  static master = Data.init();

  // static lecturers = Data.master['lecturers'];
  // static rooms = Data.master['rooms'];
  // static pengampuhs = Data.master['pengampuhs'];
  // static classes = Data.master['classes'];
  // static curriculums = Data.master['curriculums'];
  // static studiPrograms = Data.master['studiPrograms'];
  // static timeSlots = TimeSlot;

  private static init() {
    const temp = JSON.parse(localStorage.getItem(Data.localStorageItemName));

    let result;

    if (temp == null || temp.length === 0) {
      result = {
        lecturers: [],
        rooms: [],
        classes: [],
        pengampuhs: [],
        curriculums: [],
        studiPrograms: [],
        timeSlots: []
      };
    } else {
      if (temp['timeSlots'] != null) {
        temp.timeSlots.forEach(element => {
          TimeSlot.data.push(TimeSlot.deserialize(element));
        });
      }

      result = {
        lecturers: temp['lecturers'] == null ? [] : temp.lecturers,
        rooms: temp['rooms'] == null ? [] : temp.rooms,
        classes: temp['classes'] == null ? [] : temp.classes,
        pengampuhs: temp['pengampuhs'] == null ? [] : temp.pengampuhs,
        curriculums: temp['curriculums'] == null ? [] : temp.curriculums,
        studiPrograms: temp['studiPrograms'] == null ? [] : temp.studiPrograms,
        timeSlots: TimeSlot.data
      }
    }

    return result;
  }

  private static resetProp(): void {
    const temp = JSON.parse(localStorage.getItem(Data.localStorageItemName));

    if (temp == null || temp.length === 0) {
      Data.master.lecturers = [];
      Data.master.rooms = [];
      Data.master.classes = [];
      Data.master.pengampuhs = [];
      Data.master.curriculums = [];
      Data.master.studiPrograms = [];
      Data.master.timeSlots = [];
    } else {
      Data.master.lecturers = temp['lecturers'] == null ? [] : temp.lecturers;
      Data.master.rooms = temp['rooms'] == null ? [] : temp.rooms;
      Data.master.classes = temp['classes'] == null ? [] : temp.classes;
      Data.master.pengampuhs = temp['pengampuhs'] == null ? [] : temp.pengampuhs;
      Data.master.curriculums = temp['curriculums'] == null ? [] : temp.curriculums;
      Data.master.studiPrograms = temp['studiPrograms'] == null ? [] : temp.studiPrograms;
      Data.master.timeSlots = temp['timeSlots'] == null ? [] : temp.timeSlots;
    }

  }

  static toLocalStorage() {
    localStorage.setItem(Data.localStorageItemName, JSON.stringify(Data.master));
  }

  static fromJsonFile(file) {

    const reader = new FileReader;

    reader.readAsText(file, 'UTF-8');
    reader.onload = () => {
      localStorage.setItem(Data.localStorageItemName, <string>reader.result);
      Data.resetProp();
      alert('Data berhasil dimuat');
      console.log('success import data from json file');
    };
    reader.onerror = error => {
      console.log('error import data from json file', error);
    }

  }

  static toJsonFileUrl() {
    const data = localStorage.getItem(Data.localStorageItemName) == null ? JSON.stringify(Data.master) : localStorage.getItem(Data.localStorageItemName);
    const blob = new Blob([data], { type: "text/json;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      const now = new Date;
      const nowDate: string = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.' + now.getMilliseconds();

      const filename = Data.localStorageItemName + ' ' + nowDate + '.json';

      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  }

  static wipeLocalData() {
    localStorage.removeItem(Data.localStorageItemName);
    Data.resetProp();
    alert('Data berhasil dihapus');
  }

  static isEmptyData(): boolean {
    const isNullProp1 = Data.master.lecturers.length === 0;
    const isNullProp2 = Data.master.rooms.length === 0;
    const isNullProp3 = Data.master.classes.length === 0;

    return isNullProp1 && isNullProp2 && isNullProp3;
  }

  static getChromosomes() {
    let result = [];

    for (let i = 0; i < Data.master.pengampuhs.length; i++) {
      result[i] = {
        dosen1: parseInt(Data.master.pengampuhs[i].dosen1_id),
        dosen2: Data.master.pengampuhs[i].dosen2_id == null ? null : parseInt(Data.master.pengampuhs[i].dosen2_id),
        durasi: parseInt(Data.findCurriculum(Data.master.pengampuhs[i].kurikulum_id).durasi),
        kelas: parseInt(Data.master.pengampuhs[i].kelas_id),
        matkul: parseInt(Data.master.pengampuhs[i].kurikulum_id),

        ruang: Data.getRandomRoom(),
        waktu: Data.getRandomTimeSlot()
      };
    }
    return result;
  }

  static getRandomRoom() {
    return Math.floor(Math.random() * Data.master.rooms.length)
  }

  static getRandomTimeSlot() {
    return Math.floor(Math.random() * Data.master.timeSlots[0].getSumNSlot())
  }

  static findCurriculum(id) {
    return Data.master.curriculums.find(element => element.id == id);
  }
}
