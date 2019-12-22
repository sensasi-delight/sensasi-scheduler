import { environment } from 'src/environments/environment';


export class Room {
  id: string;
  name: string;
  _type: number;
  static types: Array<string> = [
    'Ruang Kelas',
    'Lab'
  ]

  static uniqueKeys = [
    'id', 'name'
  ];

  static data = (() => {
    return Room.getData();
  })();

  static refreshData() {
    Room.data = Room.getData();
  };

  private static getData() {
    let result = [];
    const local = JSON.parse(localStorage.getItem(environment.localStorageItemName));

    if (local && local['rooms']) {
      local['rooms'].forEach(element => {
        let temp = new Room;
        Object.assign(temp, element);
        result.push(temp);
      });
    }

    return result;
  }

  static toLocalStorage() {
    let local = JSON.parse(localStorage.getItem(environment.localStorageItemName));
    local['rooms'] = Room.data;
    localStorage.setItem(environment.localStorageItemName, JSON.stringify(local));
  }

  //GETTER
  get type(): string {
    return Room.types[this._type];
  }
}
