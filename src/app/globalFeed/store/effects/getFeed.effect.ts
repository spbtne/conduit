import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { FeedService } from 'src/app/shared/services/feed/feed.service';
import { FeedResponseInterface } from 'src/app/shared/types/feedResponseInterface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/getFeed.action';

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: FeedResponseInterface) => getFeedSuccessAction({ feed })),
          catchError(() => of(getFeedFailureAction()))
        );
      })
    )
  );
}
