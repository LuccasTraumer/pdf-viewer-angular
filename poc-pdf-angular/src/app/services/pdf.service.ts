import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private httpClient: HttpClient) { }

  getPDF() {
    return this.httpClient.get('http://localhost:3000/pdf')
  }
}
