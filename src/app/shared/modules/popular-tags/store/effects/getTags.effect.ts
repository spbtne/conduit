import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PopularTagsService } from '../../service/popularTags.service';
import {
  getTagsAction,
  getTagsSuccessAction,
  getTagsFailure,
} from '../actions/getTags.action';

@Injectable()
export class getTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}

  getTagsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTagsAction),
      switchMap(() => {
        return this.popularTagsService.getTags().pipe(
          map((response) => {
            return getTagsSuccessAction({ response });
          }),
          catchError(() => of(getTagsFailure()))
        );
      })
    );
  });
}
