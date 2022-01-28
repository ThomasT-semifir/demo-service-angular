import { User } from './../models/user';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  username: string = "";

  constructor(private userService : UserService) { }

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
    this.userService.create({name: this.username}).subscribe(() => this.getAll())
  }

}
