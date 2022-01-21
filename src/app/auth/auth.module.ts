import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { StoreModule } from '@ngrx/store';
import { registerReducer } from './store/reducers/register.reducer';
import { AuthService } from './service/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { PersistenceService } from '../shared/services/persistence/persistence.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', registerReducer),
    EffectsModule.forFeature([RegisterEffect]),
    RouterModule.forChild(routes),
  ],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
