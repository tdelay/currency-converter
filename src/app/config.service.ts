import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  fileName = 'assets/eurofxref-daily.xml';
}
