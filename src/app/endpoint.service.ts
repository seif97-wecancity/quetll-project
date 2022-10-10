import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private _HttpClient:HttpClient) { }

  senddata(data:any):Observable<any>{
    return this._HttpClient.post('https://takidapp.com:8007/api/ContactUs/Add', data);
  }
}
