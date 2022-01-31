import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './service/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '../shared/services/persistence/persistence.service';
import { LoginEffect } from './store/effects/login.effect';
import { LoginComponent } from './components/login/login.component';
import { AuthReducer } from './store/reducers/auth.reducer';
import { getCurrentUserEffect } from './store/effects/getCurrentUser.effect';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      getCurrentUserEffect,
    ]),
    RouterModule.forChild(routes),
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
