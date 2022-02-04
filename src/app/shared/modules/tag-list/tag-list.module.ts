import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagListComponent } from './component/tag-list.component';

@NgModule({
  declarations: [TagListComponent],
  imports: [CommonModule],
  exports: [TagListComponent],
})
export class TagListModule {}
