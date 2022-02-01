import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { StoreModule } from '@ngrx/store';
import { FeedReducer } from './store/reducers/feed.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { FeedService } from '../shared/services/feed/feed.service';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    StoreModule.forFeature('feed', FeedReducer),
    EffectsModule.forFeature([GetFeedEffect]),
  ],
  providers: [FeedService],
})
export class GlobalFeedModule {}
