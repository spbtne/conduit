import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleResponseInterface } from '../../types/articleResponseInterface';

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl + '/articles/';

  getArticle(slug: string): Observable<ArticleResponseInterface> {
    const articleApiUrl = this.apiUrl + slug;
    return this.http.get<ArticleResponseInterface>(articleApiUrl);
  }
}
