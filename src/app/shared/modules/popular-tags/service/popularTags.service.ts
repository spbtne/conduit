import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { popularTagsInterface } from '../types/popularTags.interface';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  fullUrl: string = environment.apiUrl + '/tags';

  getTags(): Observable<popularTagsInterface> {
    return this.http.get<popularTagsInterface>(this.fullUrl);
  }
}
