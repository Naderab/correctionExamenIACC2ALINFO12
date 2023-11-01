import { Component } from '@angular/core';
import { Departement } from '../models/departement';
import { DepartementService } from '../service/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent {
  dep: Departement = new Departement();
  constructor(private depService: DepartementService,private router:Router) { }
  
  add() {
    this.depService.addDepartement(this.dep).subscribe({
      next: () => this.router.navigate(['/list'])
    })
  }
}
