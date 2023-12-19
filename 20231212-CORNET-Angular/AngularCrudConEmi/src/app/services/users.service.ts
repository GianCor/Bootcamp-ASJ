import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  URL_API ='https://reqres.in/api/users'

  dataUser: any = {
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
}
