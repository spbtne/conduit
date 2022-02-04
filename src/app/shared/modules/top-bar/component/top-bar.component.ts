import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStateInterface } from 'src/app/auth/components/types/authState.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUserInterface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select('auth'),
      map((authState: AuthStateInterface) => authState.isLoggedIn)
    );
    this.currentUser$ = this.store.pipe(
      select('auth'),
      map((authState: AuthStateInterface) => authState.currentUser)
    );
  }
}
