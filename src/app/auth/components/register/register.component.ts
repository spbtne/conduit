import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

import { registerAction } from '../../store/actions/register.action';
import { AuthStateInterface } from '../types/authState.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(
      select('auth'),
      map((authState: AuthStateInterface) => authState.isSubmitting)
    );

    this.backendErrors$ = this.store.pipe(
      select('auth'),
      map((authState: AuthStateInterface) => authState.validationErrors)
    );
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(registerAction({ request }));
  }
}
