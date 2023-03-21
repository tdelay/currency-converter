import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../config.service';
import { ConvertHistoryService } from '../convert-history.service';
import { LoadCurrenciesService } from '../load-currencies.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.less']
})

export class ConverterFormComponent implements OnInit, OnDestroy {

  xmlItems: any[] = [{ currency: 'EUR', rate: 1 }];

  convertFrom: {currency: string; rate: number} = this.xmlItems[0];
  convertTo: {currency: string; rate: number} = this.xmlItems[0];

  convertAmountFromVal: number = 0;
  convertAmountToVal: number = 0;
  
  subscription!: Subscription;

  constructor(
    private loadCurrencies: LoadCurrenciesService,
    private historyService: ConvertHistoryService
  ) { }

  convertAmountFromBlur($event: any): void {
    this.convertAmountFromVal = $event.target.value || 0;
    this.calculateToResult($event.target.value || 0);
  };

  convertAmountToBlur($event: any): void {
    this.convertAmountToVal = $event.target.value || 0;
    this.calculateFromResult($event.target.value || 0);
  };

  calculateFromResult(val: number) {
    const convertedAmountToVal = val / this.convertTo.rate;
    this.convertAmountFromVal = convertedAmountToVal * this.convertFrom.rate;
    this.logResults();
  }

  calculateToResult(val: number) {
    const convertedAmountFromVal = val / this.convertFrom.rate;
    this.convertAmountToVal = convertedAmountFromVal * this.convertTo.rate;
    this.logResults();
  }

  logResults(): void {
    if (this.convertAmountFromVal !== 0 && this.convertAmountToVal !== 0) {
      this.historyService.setMessages(`${this.convertAmountFromVal} ${this.convertFrom.currency} converted to ${this.convertAmountToVal} ${this.convertTo.currency}`);
    }
  }

  ngOnInit(): void {
    this.subscription = this.loadCurrencies.getXmlData().subscribe(
      (res: any) => {
        this.xmlItems = this.xmlItems.concat(res);
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
