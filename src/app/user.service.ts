import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './model/user';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

/*
  getAll() {
    return this.http.get('/api/users').map((response: Response) => response.json());
  }

  getById(_id: string) {
    return this.http.get('/api/users/' + _id).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user._id, user);
  }

  delete(_id: string) {
    return this.http.delete('/api/users/' + _id);
  }
*/
}
