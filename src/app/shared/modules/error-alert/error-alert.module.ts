import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertComponent } from './component/error-alert/error-alert.component';

@NgModule({
  declarations: [ErrorAlertComponent],
  imports: [CommonModule],
  exports: [ErrorAlertComponent],
})
export class ErrorAlertModule {}
