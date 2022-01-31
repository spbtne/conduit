import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map, Observable } from 'rxjs';

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
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<BackendErrorsInterface | null>;

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
    this.isSubmitting$ = this.store.pipe(
      select('auth'),
      map((authState: AuthStateInterface) => authState.isSubmitting)
    );
    this.backendErrors$ = this.store.pipe(
      select('auth'),
      map((AuthState: AuthStateInterface) => AuthState.validationErrors)
    );
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(loginAction({ request }));
  }

  get _isFormValid() {
    return this.form.valid;
  }
}
