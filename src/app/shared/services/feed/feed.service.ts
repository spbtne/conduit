import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedResponseInterface } from '../../types/feedResponseInterface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<FeedResponseInterface> {
    const fullUrl = `${environment.apiUrl}/${url}`;
    return this.http.get<FeedResponseInterface>(fullUrl);
  }
}
