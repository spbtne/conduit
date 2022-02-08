import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesService } from '../shared/services/articles/articles.service';
import { EffectsModule } from '@ngrx/effects';
import { getArticleEffect } from './store/effects/getArticle.effect';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ArticleReducer } from './store/reducers/getArticle.reducer';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];
@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([getArticleEffect]),
    StoreModule.forFeature('articles', ArticleReducer),
  ],
  providers: [ArticlesService],
})
export class ArticlesModule {}
