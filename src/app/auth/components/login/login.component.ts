import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

import { loginAction } from '../../store/actions/login.action';
import { AuthStateInterface } from '../types/authState.interface';
import { LoginRequestInterface } from '../types/loginRequestInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting!: boolean;
  backendErrors!: BackendErrorsInterface | null;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.store
      .pipe(select('auth'))
      .subscribe((authState: AuthStateInterface): void => {
        this.isSubmitting = authState.isSubmitting;
        this.backendErrors = authState.validationErrors;
      });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(loginAction({ request }));
  }

  get _isSignInValid() {
    return this.form.valid;
  }
}
