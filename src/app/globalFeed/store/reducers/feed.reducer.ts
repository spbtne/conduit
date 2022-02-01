import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from '../../types/feedStateInterface';
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from '../actions/getFeed.action';

export const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const FeedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
      data: null,
    })
  ),
  on(
    getFeedSuccessAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: state.data,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
