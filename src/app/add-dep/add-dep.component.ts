import { Component } from '@angular/core';
import { Departement } from '../models/departement';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent {
  dep: Departement = new Departement();
}
