import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadCurrenciesService } from '../load-currencies.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.less']
})
export class ConverterFormComponent implements OnInit, OnDestroy {
  convertFrom: number = 1;
  convertTo: number = 1;
  xmlItems: any[] = [{ currency: 'EUR', rate: 1 }];
  subscription!: Subscription;

  constructor(private loadCurrencies: LoadCurrenciesService) { }

  ngOnInit(): void {
    this.subscription = this.loadCurrencies.getCurrencyXmlData().subscribe(
      (res: any) => {
        this.xmlItems = res;
        console.log(this.xmlItems);
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
