import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../../components/types/authState.interface';
import { registerAction } from '../actions/register.action';

export const initialState: AuthStateInterface = {
  isSubmitting: false,
};

export const registerReducer = createReducer(
  initialState,
  on(registerAction, (state) => ({
    ...state,
    isSubmitting: true,
  }))
);
