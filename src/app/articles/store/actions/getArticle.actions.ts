import { createAction, props } from '@ngrx/store';
import { ArticleResponseInterface } from 'src/app/shared/types/articleResponseInterface';
import { ActionTypes } from '../actionTypes';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ response: ArticleResponseInterface }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
