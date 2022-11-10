import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  url = 'http://localhost:3000/beneficiarios/1'

  constructor(private http: HttpClient) { }

  getExame() {
    return this.http.get(this.url);
  }

}
