import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, mergeMap, of, switchMap } from 'rxjs';
import { PersistenceService } from 'src/app/shared/services/persistence/persistence.service';
import { CurrentUserInterface } from 'src/app/shared/types/currentUserInterface';
import { AuthService } from '../../service/auth.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action';

@Injectable()
export class getCurrentUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  getCurrentUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap((accessToken) => {
        if (!accessToken) {
          return of(getCurrentUserFailureAction());
        }

        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => of(getCurrentUserFailureAction()))
        );
      })
    )
  );
}
