import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs';
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
      username: ['', Validators.required],
      email: '',
      password: '',
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
    const request: RegisterRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(registerAction({ request }));
  }
}
