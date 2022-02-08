import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticlesService } from 'src/app/shared/services/articles/articles.service';
import { ArticleResponseInterface } from 'src/app/shared/types/articleResponseInterface';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../actions/getArticle.actions';

@Injectable()
export class getArticleEffect {
  constructor(
    private articleService: ArticlesService,
    private actions$: Actions
  ) {}

  getArticleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.getArticle(slug).pipe(
          map((response: ArticleResponseInterface) =>
            getArticleSuccessAction({ response })
          ),
          catchError(() => of(getArticleFailureAction()))
        );
      })
    )
  );
}
