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
import { TagFeedComponent } from './component/tag-feed/tag-feed.component';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
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
export class TagFeedModule {}
