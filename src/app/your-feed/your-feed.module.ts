import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetFeedEffect } from '../globalFeed/store/effects/getFeed.effect';
import { FeedReducer } from '../globalFeed/store/reducers/feed.reducer';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popularTags.modules';
import { SpinnerModule } from '../shared/modules/spinner/spinner.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { FeedService } from '../shared/services/feed/feed.service';
import { YourFeedComponent } from './components/your-feed/your-feed.component';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
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
    FeedTogglerModule,
  ],
  providers: [FeedService],
})
export class YourFeedModule {}
