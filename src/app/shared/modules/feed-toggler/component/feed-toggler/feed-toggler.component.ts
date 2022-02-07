import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AuthStateInterface } from 'src/app/auth/components/types/authState.interface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  @Input('selectedTag') selectedTagProps!: string | null;

  isLoggedIn$!: Observable<boolean | null>;
  currentTagUrl!: string;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(
      select('auth'),
      map((authState: AuthStateInterface) => authState.isLoggedIn)
    );
  }
}
