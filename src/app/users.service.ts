import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly rooturl='http://localhost:8080/icat-users/users';
  constructor(private http: HttpClient) { }

  getUsers(): any {
    return this.http.get( this.rooturl + '/');
  }
  //?name='+nname+'&email'+nemail+'&name'
  postUser(user : User): any {
    return this.http.post(this.rooturl,user);
  }
}
