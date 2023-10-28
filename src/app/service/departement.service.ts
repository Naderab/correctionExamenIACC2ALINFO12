import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  apiUrl: string = 'http://localhost:3000/departements';
  constructor(private http: HttpClient) { }
  
  addDepartement(dep: Departement) {
    return this.http.post(this.apiUrl, dep);
  }
}
