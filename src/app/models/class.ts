import { environment } from 'src/environments/environment';

export class Subject {
  name: string;
  type: string;
  lecturer1Id: string;
  lecturer2Id: string;
  duration: number;
}

export class Class {
  id: string;
  name: string;
  studyProgram: string;
  grade: number;
  subjects = [];

  static uniqueKeys = [
    'id'
  ];

  static data = (() => {
    return Class.getData();
  })();

  static refreshData() {
    Class.data = Class.getData();
  };

  private static getData() {
    let result = [];
    const local = JSON.parse(localStorage.getItem(environment.localStorageItemName));

    if (local && local['classes']) {
      local['classes'].forEach(element => {
        let temp = new Class;
        Object.assign(temp, element);
        if (!temp.subjects) {
          temp.subjects = [];
        }
        result.push(temp);
      });
    }

    return result;
  }

  getSumSubjectsDuration() {
    // return this.subjects.reduce((a, b) => a.duration + b.duration, 0);
    return this.subjects.reduce((a, b) => a + (b.duration || 0), 0);

  }

  static toLocalStorage() {
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['classes'] = Class.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }
}
