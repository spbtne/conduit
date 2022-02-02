import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="text-success">
    Loading
    <span class="dot-1">.</span>
    <span class="dot-2">.</span>
    <span class="dot-3">.</span>
  </div>`,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
