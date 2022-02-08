import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesService } from '../shared/services/articles/articles.service';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule],
  providers: [ArticlesService],
})
export class ArticlesModule {}
