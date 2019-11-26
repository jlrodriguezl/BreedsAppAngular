import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConsultaRazasService {

  private razasUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  async getRazas(): Promise<any>{
    const url = 'https://dog.ceo/api/breeds/list/all';
    return await this.http.get<any>(url).toPromise();
  }

  async getFotos(raza: string): Promise<any>{
     let urlinicial = 'https://dog.ceo/api/breed/hound/images';
     const url = urlinicial.replace('hound',raza);
    return await this.http.get<any>(url).toPromise();
  }
}
