import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  url = 'http://localhost:3000/beneficiarios/1';

  constructor(private http: HttpClient) { }

  getDadosBenef() {
    return this.http.get(this.url);
  }

}
