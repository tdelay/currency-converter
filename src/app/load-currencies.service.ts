import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class LoadCurrenciesService {
  private xmlItems: any;

  constructor(private http:HttpClient) {
    this.loadXML();
  }

  //getting data function
private loadXML() {
  /*Read Data*/
  this.http.get('assets/eurofxref-daily.xml',
  {
    headers: new HttpHeaders()
      .set('Content-Type', 'text/xml')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
    responseType: 'text'
  })
  .subscribe((data) => {
    this.parseXML(data)
      .then((data) => {
        this.xmlItems = data;
      });
  });
  /*Read Data*/
}
// store xml data into array variable
private parseXML(data: string) {
    return new Promise(resolve => {
      var k: string | number,
        arr : any[] = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err: any, result: { 'gesmes:Envelope': any; }) {
        var obj = result['gesmes:Envelope'].Cube[0].Cube[0];
        for (k in obj.Cube) {
          var item = obj.Cube[k];
          arr.push({
            currency: item.$.currency,
            rate: item.$.rate
          });
        }
        resolve(arr);
      });
    });
  }

getCurrencyXmlData() : Observable<any[]> {
    return of(this.xmlItems);
  }
}
