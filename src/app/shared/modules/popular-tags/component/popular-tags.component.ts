import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription, tap } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';

import { getTagsAction } from '../store/actions/getTags.action';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<string[] | null>;
  isLoading$!: Observable<boolean | null>;

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(
      select('popularTags'),
      map(
        (popularTagsState: PopularTagsStateInterface) =>
          popularTagsState.isLoading
      )
    );

    this.popularTags$ = this.store.pipe(
      select('popularTags'),
      map((popularTagsState: PopularTagsStateInterface) => {
        return popularTagsState.tags;
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getTagsAction());
  }
}
