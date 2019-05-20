import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-alert-custom',
  templateUrl: './alert-custom.html',
  styles: [`
    :host >>> .alert-custom {
      color: #ffffff;
      background-color: #1abc9c;
    }
  `]
})
export class NgbdAlertCustom {}
