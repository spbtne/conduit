import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SpinnerModule } from '../spinner/spinner.module';
import { PopularTagsComponent } from './component/popular-tags.component';
import { PopularTagsService } from './service/popularTags.service';
import { getTagsEffect } from './store/effects/getTags.effect';
import { PopularTagsReducer } from './store/reducers/getTags.reducer';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    RouterModule,
    StoreModule.forFeature('popularTags', PopularTagsReducer),
    EffectsModule.forFeature([getTagsEffect]),
  ],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
