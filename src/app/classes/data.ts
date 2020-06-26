import { environment } from 'src/environments/environment';

import { TimeSlot } from '../models/time-slot';
import { Class } from '../models/class';
import { Lecturer } from '../models/lecturer';
import { Room } from '../models/room';

export class Data {
  static master = Data.init();

  private static init() {
    let result = {
      lecturers: Lecturer.data,
      rooms: Room.data,
      classes: Class.data,
      timeSlots: TimeSlot.data
    }

    return result;
  }

  private static refreshData(): void {
    Class.refreshData();
    Room.refreshData();
    TimeSlot.refreshData();
    Lecturer.refreshData();
  }

  static toLocalStorage() {
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(Data.master));
  }

  static fromJsonFile(file) {

    const reader = new FileReader;

    reader.readAsText(file, 'UTF-8');
    reader.onload = () => {
      localStorage.setItem(environment.localStorageItemName, <string>reader.result);
      Data.refreshData();
      alert('Data berhasil dimuat');
      console.log('success import data from json file');
    };
    reader.onerror = error => {
      console.log('error import data from json file', error);
    }

  }

  static toJsonFileUrl() {
    const data = localStorage.getItem(environment.localStorageItemName) == null ? JSON.stringify(Data.master) : localStorage.getItem(environment.localStorageItemName);
    const blob = new Blob([data], { type: "text/json;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      const now = new Date;
      const nowDate: string = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + '.' + now.getMilliseconds();

      const filename = environment.localStorageItemName + ' ' + nowDate + '.json';

      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  }

  static wipeLocalData() {
    localStorage.removeItem(environment.localStorageItemName);
    Data.refreshData();
    alert('Data berhasil dihapus');
  }

  static isEmptyData(): boolean {
    const isNullProp1 = Data.master.lecturers.length === 0;
    const isNullProp2 = Data.master.rooms.length === 0;
    const isNullProp3 = Data.master.classes.length === 0;

    return isNullProp1 && isNullProp2 && isNullProp3;
  }

  static getChromosomes(timeSlotIndex) {
    let result = [];
    let index = 0;

    TimeSlot.data[timeSlotIndex].classes.forEach(classObj => {
      classObj.subjects.forEach(subject => {
        result[index++] = {
          dosen1: subject.lecturer1Id,
          dosen2: subject.lecturer2Id,
          durasi: subject.duration,
          kelas: classObj.id,
          matkul: subject.name,

          ruang: Data.getRandomRoom(),
          waktu: Data.getRandomTimeSlot(timeSlotIndex)
        };
      });
    });

    return result;
  }

  static getRandomRoom() {
    return Math.floor(Math.random() * Data.master.rooms.length)
  }

  static getRandomTimeSlot(timeSlotIndex) {
    return Math.floor(Math.random() * TimeSlot.data[timeSlotIndex].getSumNSlot())
  }
}
