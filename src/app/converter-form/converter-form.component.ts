import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.less']
})
export class ConverterFormComponent {
  // @Input() currencyFrom = '';
  // @Input() currencyTo = '';

  items: string[] = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
