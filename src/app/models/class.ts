import { environment } from 'src/environments/environment';
import { StudyProgram } from './study-program';

export class Class {
  id;
  name;
  studyProgramId;
  grade: number;



  static data = (() => {
    let result = [];
    JSON.parse(localStorage.getItem(environment.localStorageItemName))['classes'].forEach(element => {
      let temp = new Class;
      Object.assign(temp, element);
      result.push(temp);
    });

    return result;
  })();

  getStudyProgram() {
    return StudyProgram.find(this.studyProgramId);
  }
}
