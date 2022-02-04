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
import { BannerModule } from '../shared/modules/banner/banner.module';

import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { SpinnerModule } from '../shared/modules/spinner/spinner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popularTags.modules';

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
    BannerModule,
    TagListModule,
    SpinnerModule,
    PopularTagsModule,
  ],
  providers: [FeedService],
})
export class GlobalFeedModule {}
