import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ga-etps-open',
  templateUrl: './ga-etps-open.component.html',
  styleUrls: ['./ga-etps-open.component.css'],
})
export class GaEtpsOpenComponent implements OnInit {
  selectedCities: string[] = [];

  selectedCategories: any[] = ['Technology', 'Sports'];

  categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'},
   {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

  checked = false;

  ngOnInit() {
      this.selectedCategories = this.categories.slice(1, 3);
  }
}
