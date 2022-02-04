import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './component/feed.component';
import { RouterModule } from '@angular/router';
import { ErrorAlertModule } from '../error-alert/error-alert.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { TagListModule } from '../tag-list/tag-list.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorAlertModule,
    SpinnerModule,
    TagListModule,
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
