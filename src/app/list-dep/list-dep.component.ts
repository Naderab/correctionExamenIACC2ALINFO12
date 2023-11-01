import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import { Departement } from '../models/departement';

@Component({
  selector: 'app-list-dep',
  templateUrl: './list-dep.component.html',
  styleUrls: ['./list-dep.component.css'],
})
export class ListDepComponent implements OnInit {
  list: Departement[] = [];
  searchText: string = "";
  newSalaire: number = 0;
  hide = true;
  selectedDepartement: Departement = new Departement();
  count: number = 0;
  constructor(private depService: DepartementService) {}
  ngOnInit() {
    this.depService.getDepartements().subscribe({
      next: (data) => (this.list = data as Departement[]),
    });
  }

  searchBySalaire() {
    this.list = this.list.filter((d) => d.max_salaire < Number(this.searchText));
  }

  showForm(d:Departement) {
    this.hide = !this.hide;
    this.selectedDepartement = d;
    this.newSalaire = d.max_salaire;
  }

  updateDep() {
    this.selectedDepartement.max_salaire = this.newSalaire;
    this.depService.update(this.selectedDepartement).subscribe();
    this.hide = !this.hide;
  }

  calculNbEmploye() {
    for (let i = 0; i < this.list.length; i++){
      this.count = this.count + this.list[i].nb_employer;
    }
  }
}
