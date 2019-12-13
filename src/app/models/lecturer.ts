import { environment } from 'src/environments/environment';


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

  static toLocalStorage() {
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['lecturers'] = Lecturer.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }
}
