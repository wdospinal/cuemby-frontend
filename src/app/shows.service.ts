import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Show } from 'app/model/show';

@Injectable()
export class ShowsService {
  constructor(private http: Http) { }

  addFavorite(show: Show) {
    return this.http.post('/api/shows/favorite', show);
  }

  addComment(show: Show, comment: String) {
    const data = { show, comment };
    return this.http.post('/api/shows/comment', data);
  }

  addLike(show: Show) {
    return this.http.post('/api/shows/like', show);
  }
}
