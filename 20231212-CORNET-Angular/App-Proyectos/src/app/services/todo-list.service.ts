import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http:HttpClient) { }

  URL_API :string = "http://localhost:8080/tareas";

  getTareas(): Observable<any[]>{
    return this.http.get<any[]>(this.URL_API)
  }

  postTareas(task: any): Observable<any> {
    return this.http.post<any>(this.URL_API, task);
  }

  deleteTareas(task_id: number): Observable<any>{
    return this.http.delete<any>(this.URL_API + `/${task_id}`)
  }

  putTareas(task: any): Observable<any>{
    return this.http.put<any>(this.URL_API + `/${task.id}`, {responseType: 'text'}, task)
  }
}
