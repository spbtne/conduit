import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  template: `
    <div class="alert alert-danger" role="alert">
      Something went wrong: {{ errors }}
    </div>
  `,
})
export class ErrorAlertComponent implements OnInit {
  constructor() {}

  @Input() errors!: string | null;

  ngOnInit(): void {}
}
