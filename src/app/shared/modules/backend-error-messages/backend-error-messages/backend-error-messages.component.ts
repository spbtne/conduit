import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: BackendErrorsInterface | null;
  errorMessages!: (string | null)[];
  constructor() {}

  ngOnInit(): void {
    if (this.backendErrorsProps) {
      this.errorMessages = Object.keys(this.backendErrorsProps).map(
        (errorName: string) => {
          if (this.backendErrorsProps) {
            const messages = this.backendErrorsProps[errorName].join(', ');
            return `${errorName}: ${messages}`;
          } else {
            return null;
          }
        }
      );
    }
  }
}
