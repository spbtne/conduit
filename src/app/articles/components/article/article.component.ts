import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleInterface } from 'src/app/shared/types/articleInterface';
import { getArticleAction } from '../../store/actions/getArticle.actions';
import { getArticleEffect } from '../../store/effects/getArticle.effect';
import { ArticleStateInterface } from '../../types/articleStateInterface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  isLoading$!: Observable<boolean>;
  article$!: Observable<ArticleInterface | null>;
  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  fetchData() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.store.dispatch(getArticleAction({ slug }));
    }
  }
  initializeValues() {
    this.isLoading$ = this.store.pipe(
      select('articles'),
      map((articleState: ArticleStateInterface) => articleState.isLoading)
    );
    this.article$ = this.store.pipe(
      select('articles'),
      map(
        (articleState: ArticleStateInterface) =>
          articleState.data?.article || null
      )
    );
  }
}
