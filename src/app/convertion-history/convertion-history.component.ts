import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConvertHistoryService } from '../convert-history.service';

@Component({
  selector: 'app-convertion-history',
  templateUrl: './convertion-history.component.html',
  styleUrls: ['./convertion-history.component.less']
})
export class ConvertionHistoryComponent implements OnInit, OnDestroy {
  historyMessages: string[] = [];
  subscription!: Subscription;

  constructor(private historyService: ConvertHistoryService) { }

  ngOnInit(): void {
    this.subscription = this.historyService.getMessages().subscribe(
      (res: any) => {
        this.historyMessages = res;
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
