import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL='https://javd.herokuapp.com/';

  constructor(private http: HttpClient) { }


  sendEmail(obj){
    return this.http.post(`${this.URL}sendMail.php`,JSON.stringify(obj))

  }
}
