import { User } from './../models/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  user: FormGroup;

  constructor(private userService : UserService) { 
    this.user = new FormGroup({
      name: new FormControl(),
      email: new FormControl()
    })
  }

  ngOnInit(): void {
    console.log("création");
    this.getAll();
  }

  ngOnDestroy(): void {
    console.log("destruction");
  }

  private getAll() {
    this.userService.getAll().subscribe({
      next: data => this.userList = data,
      error: err => console.error(err),
      complete: () => console.log("user service fini")
    });
  }

  save(): void {
    let newUser = {...this.user.value}
    this.userService.create(newUser).subscribe(() => this.getAll())
  }

}
