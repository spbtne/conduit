import { createAction, props } from '@ngrx/store';
import { popularTagsInterface } from '../../types/popularTags.interface';
import { ActionTypes } from '../actionsTypes';

export const getTagsAction = createAction(ActionTypes.GET_TAGS);

export const getTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{ response: popularTagsInterface }>()
);

export const getTagsFailure = createAction(ActionTypes.GET_TAGS_FAILURE);
