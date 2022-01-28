import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent implements OnInit {

  @Output() newUser: EventEmitter<User> = new EventEmitter<User>();

  user: FormGroup;

  constructor() { 
    this.user = new FormGroup({
      name: new FormControl(),
      email: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  emitNewUser(): void {
    this.newUser.emit({...this.user.value})
  }

}
