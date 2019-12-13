import { environment } from 'src/environments/environment';
import { StudyProgram } from './study-program';

export class Class {
  id;
  name;
  studyProgramId;
  grade: number;

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
        result.push(temp);
      });
    }

    return result;
  }

  static toLocalStorage() {
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['classes'] = Class.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }



  getStudyProgram() {
    if (this.studyProgramId) {
      return StudyProgram.find(this.studyProgramId);
    } else {
      return new StudyProgram;
    }

  }
}
