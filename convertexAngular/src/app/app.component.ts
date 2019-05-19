import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'convertexAngular';
  jsonData:any[];

  constructor(private httpClient:HttpClient){
      this.getJSONValues();
  }

  getJSONValues(){
      this.httpClient.get("../assets/initialValues.json")
      .subscribe((data)=>{
        console.log(data);
        this.jsonData = <Array<any>[]>data;
      });
  }

  saveValues(){

    const httpOptions={
      'Content-Type':'application/json',
    };

    // this.httpClient.post("../assets/finalValues.json",httpOptions)
    // .subscribe((data)=>{
    //   console.log(data);
    // })
  }
}
