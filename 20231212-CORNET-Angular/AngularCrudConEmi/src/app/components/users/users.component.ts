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
  msg: string = '';

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res.data;
    });
  }

  delete(user: any) {
    let confirmacion = confirm('¿Estas seguro?');
    if (confirmacion) {
      this.userService.deleteUsers(user).subscribe((res) => {
        console.log(res);
        this.list();
      });
    }
  }

  update(user: any) {
    this.userService.dataUser = {
      id: user.id,
      name: user.first_name,
      job: 'Astrofisico',
    };
    this.userService.updateUsers(user).subscribe((res) => {});
  }

  resetForm(form :NgForm){
    form.reset();
    this.userService.dataUser.id = -1
    setTimeout(()=>{
      this.msg = ""
    },2500)
  }

  create(form: NgForm) {
    if (this.userService.dataUser.id != 1) {
      this.userService.updateUsers(form.value).subscribe((res) => {
        this.msg = 'Usuario creado correctamente';
        this.resetForm(form)
        this.list();
      });
    } else {
      if (!form.valid) {
        console.log('formulario invalido');
        return;
      } else {
        //aca se puede trabajar los datos

        this.userService.createUsers(form.value).subscribe((res) => {
          console.log(res);
          form.reset();
          this.list();
          this.msg = 'Usuario creado correctamente';
        });
      }
    }
  }
}
