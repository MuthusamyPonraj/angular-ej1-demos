import {Component} from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './rtl.component.html'
})
export class RTLComponent {
  content: string;
  constructor() {
      this.content = 'Description: The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents and get the HTML content from RTE';
  }
}
