import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { xml2js } from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class LoadCurrenciesService {

  constructor(private http:HttpClient) {}

  public getXmlData() {
    const url = 'assets/eurofxref-daily.xml';
    return this.http.get(url, { responseType: 'text' }).pipe(
      map((xmlData: string) => {
        const json: { [key: string]: any } = xml2js(xmlData, { compact: true });
        const arr = [];
        const obj = json['gesmes:Envelope'].Cube.Cube;
        for (let k in obj.Cube) {
          var item = obj.Cube[k];

          arr.push({
            currency: item._attributes.currency,
            rate: item._attributes.rate
          });
        }

        return arr;
      })
    );
  }
}
