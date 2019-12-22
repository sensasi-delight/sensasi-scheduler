import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  RoomClass = Room;
  model: Room = new Room;
  storeMode: string;
  rooms = Room.data;
  workingIndex: number;

  constructor() {}

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  initCreate() {
    this.model = new Room;
    this.storeMode = 'create';
    $('#roomFormModal').modal('show');
  }

  initDelete(index): void {
    this.storeMode = 'delete';
    this.workingIndex = index;
    Object.assign(this.model, {...this.rooms[index]});
    $('#roomDeleteModal').modal('show');
  }

  initUpdate(index): void {
    this.storeMode = 'update';
    this.workingIndex = index;
    Object.assign(this.model, {...this.rooms[index]});
    $('#roomFormModal').modal('show');
  }

  storeRoom(formData): void {
    this.checkUnique(formData);

    if (formData.form.valid) {
      switch (this.storeMode) {
        case 'create':
          let newRoom = new Room;
          Object.assign(newRoom, {...this.model})
          this.rooms.push(newRoom);

          break;

        case 'update':
          Object.assign(this.rooms[this.workingIndex], {...this.model});
          break;

        default:
          break;
      }

      $('#roomFormModal').modal('hide');
      formData.resetForm();
      Room.toLocalStorage();
    }
  }

  deleteRoom(): void {
    $('#roomDeleteModal').modal('hide');
    this.rooms.splice(this.workingIndex, 1);
    Room.toLocalStorage();
  }

  private checkUnique(formData) {
    for (const key in formData.form.controls) {
      this.rooms.forEach((room, index) => {
        if (Room.uniqueKeys.indexOf(key) != -1) {
          if (room[key] == formData.form.controls[key].value) {
            if (this.storeMode == 'create' || (this.storeMode == 'update' && this.workingIndex != index)) {
              formData.form.controls[key].setErrors({unique: true})
            }
          }
        }
      });
    }
  }
}
