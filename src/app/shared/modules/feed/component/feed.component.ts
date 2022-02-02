import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getFeedAction } from 'src/app/globalFeed/store/actions/getFeed.action';
import { FeedStateInterface } from 'src/app/globalFeed/types/feedStateInterface';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { FeedResponseInterface } from 'src/app/shared/types/feedResponseInterface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  errors$!: Observable<string | null>;
  feed$!: Observable<FeedResponseInterface | null>;

  @Input() apiUrlProps!: string;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));

    this.initializeValues();
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(
      select('feed'),
      map((feedState: FeedStateInterface) => feedState.data)
    );

    this.isLoading$ = this.store.pipe(
      select('feed'),
      map((feedState: FeedStateInterface) => feedState.isLoading)
    );

    this.errors$ = this.store.pipe(
      select('feed'),
      map((feedState: FeedStateInterface) => feedState.error)
    );
  }
}
