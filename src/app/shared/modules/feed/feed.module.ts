import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './component/feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule],
  exports: [FeedComponent],
})
export class FeedModule {}
