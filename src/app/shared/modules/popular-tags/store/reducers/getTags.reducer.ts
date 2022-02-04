import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { PopularTagsStateInterface } from '../../types/popularTagsState.interface';
import {
  getTagsAction,
  getTagsFailure,
  getTagsSuccessAction,
} from '../actions/getTags.action';

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  errors: null,
  tags: null,
};

export const PopularTagsReducer = createReducer(
  initialState,
  on(
    getTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      tags: action.response.tags,
    })
  ),
  on(
    getTagsFailure,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      tags: null,
    })
  )
);
