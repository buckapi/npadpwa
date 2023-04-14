import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoryService {

  private palabrasUrl = 'assets/assetsNpad/js/palabras.json'; // Ruta del archivo JSON

  constructor(private http: HttpClient) { }

  getWords(): Observable<any> {
    return this.http.get(this.palabrasUrl);
  }

}