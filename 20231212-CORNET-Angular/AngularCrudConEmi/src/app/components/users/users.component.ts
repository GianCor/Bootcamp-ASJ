import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(public userService: UsersService) {}

  users: any = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.data;
    });
  }

  create(form: NgForm) {
    if (!form.valid) {
      console.log('formulario invalido');
      return;
    } else {

      //aca se puede trabajar los datos

      this.userService.createUsers(form.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
