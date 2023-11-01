import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  apiUrl: string = 'http://localhost:3000/departements/';
  constructor(private http: HttpClient) { }
  
  addDepartement(dep: Departement) {
    return this.http.post(this.apiUrl, dep);
  }

  //Q10
  getDepartements() {
    return this.http.get(this.apiUrl);
  }

  update(dep: Departement) {
    return this.http.put(this.apiUrl + dep.id, dep);
  }
}
