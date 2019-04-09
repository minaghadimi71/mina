import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: User[] = [];
  constructor() { }
  addUser(user: User): Observable<User[]> {
    user.id = this.getId(this.users);
    this.users.push(user);
    return of(this.users);
  }
  getId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(shop => shop.id)) + 1 : 1;
  }
  getuser(id: number): Observable<User> {
    return of(this.users[id - 1]);
  }
}
