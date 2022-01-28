import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.URL}/users`);
  }

  // getById(id: string|number): Observable<User> {
  //   http://localhost:3000/id
  // }

  // put(user: User): Observable<User> {
  //   (http://localhost:3000/id, user)
  // }

  // delete(id: string|number): void {
  //   http://localhost:3000/id
  // }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${environment.URL}/users`, user);
  }
}
