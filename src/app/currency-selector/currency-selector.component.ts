import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.less']
})
export class CurrencySelectorComponent {
    typesOfCurrencies: string[] = ['EUR', 'GBP', 'USD'];


  public xmlItems: any;
constructor(private http:HttpClient) {
   
     this.loadXML(); 
   }
 //getting data function
 loadXML()
  {
    /*Read Data*/
    this.http.get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml',  
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
          console.log(data);
          this.xmlItems = data;  
        });  
    });  
    /*Read Data*/
  }
  //store xml data into array variable
  parseXML(data: string) {  
      return new Promise(resolve => {  
        var k: string | number,  
          arr : any[] = [],  
          parser = new xml2js.Parser(  
            {  
              trim: true,  
              explicitArray: true  
            });  
        parser.parseString(data, function (err: any, result: { Employee: any; }) {  
          var obj = result.Employee;  
          for (k in obj.emp) {  
            var item = obj.emp[k];  
            arr.push({  
              id: item.id[0],  
              name: item.name[0],  
              email: item.email[0],  
              
            });  
          }  
          resolve(arr);  
        });  
      });  
    }  
}