import { HeroService } from '../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heros: Hero[];
  color: string;
  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHeros();
  }
  getHeros(): void {
    this.heroService.getHeros().subscribe(ret => {
      this.heros = ret.slice(1, 5);
    });
  }

  pick(color: string) {
    this.color = color;
  }
}
