import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { AuthService } from '../../service/auth.service';

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
  authState$!: Observable<AuthStateInterface>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
    private authService: AuthService
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
    this.authState$ = this.store.pipe(select('auth'));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: { ...this.form.value },
    };
    this.store.dispatch(registerAction({ request }));
  }
}
