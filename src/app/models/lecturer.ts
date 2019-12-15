import { environment } from 'src/environments/environment';
import { Class } from './class';

export class Lecturer {
  id: string;
  name: string;

  static uniqueKeys = [
    'id', 'name'
  ];

  static data = (() => {
    return Lecturer.getData();
  })();

  static refreshData() {
    Lecturer.data = Lecturer.getData();
  };

  private static getData() {
    let result = [];
    const local = JSON.parse(localStorage.getItem(environment.localStorageItemName));

    if (local && local['lecturers']) {
      local['lecturers'].forEach(element => {
        let temp = new Lecturer;
        Object.assign(temp, element);
        result.push(temp);
      });
    }

    return result;
  }

  getSumDuration() {
    let result = 0;
    Class.data.forEach(clasObj => {
      clasObj.subjects.forEach(subjectObj => {
        if (subjectObj.lecturer1Id == this.id || subjectObj.lecturer2Id == this.id) {
          result += subjectObj.duration;
        }
      });
    });

    return result;
  }

  static toLocalStorage() {
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['lecturers'] = Lecturer.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }

  static toSelect2Options(): Array<any> {
    let result = [];

    [...Lecturer.data].forEach(el => {
      result.push({
        id: el.id,
        text: el.name
      });
    });

    result.sort((a, b) => a.text.localeCompare(b.text));

    return result;
  }
}
