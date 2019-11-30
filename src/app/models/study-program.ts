import { environment } from 'src/environments/environment';

export class StudyProgram {
  static data = (() => {
    let result = [];
    JSON.parse(localStorage.getItem(environment.localStorageItemName))['studyPrograms'].forEach(element => {
      let temp = new StudyProgram;
      Object.assign(temp, element);
      result.push(temp);
    });

    return result;
  })();

  id;
  name;

  static find(id) {
    return StudyProgram.data.find(studyProgram => studyProgram.id === id);
  }
}
