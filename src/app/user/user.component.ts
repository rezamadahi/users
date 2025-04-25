// import {Component, computed, Input, signal} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

import {Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { CardComponent } from "../shared/components/card/card.component";

// type User = {
//   id: string,
//   name: string,
//   avatar: string,
// };

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/images/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/images/users/' + this.selectedUser().avatar;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // avatar = input.required<string>();
  // name = input.required<string>();
  //
  // imagePath = computed(() => {
  //   return 'assets/images/users/' + this.avatar();
  // });

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/images/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }

}
