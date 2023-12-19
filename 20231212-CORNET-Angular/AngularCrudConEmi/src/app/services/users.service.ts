import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from "../models/user"

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  URL_API ='https://reqres.in/api/users'

  dataUser: any = {
    id: -1,
    name:"",
    job:""
  }

  public getUsers():Observable<any> {
    return this.http.get(this.URL_API)
  }
  public createUsers(user:any) :Observable<any>{
    console.log(this.http.post(this.URL_API, user))
    return  this.http.post(this.URL_API, user)
  }
  public deleteUsers(id:any) :Observable<any>{
    return this.http.delete(this.URL_API + "/" + id)
  }

  public updateUsers(usuario:any) :Observable<any>{
    return this.http.put(this.URL_API + "/" + this.dataUser.id, usuario)
  }
}
