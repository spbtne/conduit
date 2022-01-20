import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../components/types/registerRequest.interface';
import { ActionTypes } from '../actionTypes';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);
