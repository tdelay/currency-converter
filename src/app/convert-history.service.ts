import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertHistoryService {

  private _historyMessages: string[] = [];

  constructor() { }

  setMessages(message: string): void {
    this._historyMessages.push(message);
  }

  getMessages(): Observable<string[]> {
    return of(this._historyMessages);
  }
}
