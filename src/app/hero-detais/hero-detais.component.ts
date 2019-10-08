import { HeroService } from './../hero.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detais',
  templateUrl: './hero-detais.component.html',
  styleUrls: ['./hero-detais.component.css']
})
export class HeroDetaisComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .pipe(
      tap()
    ).subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.heroService.updatehero(this.hero)
    .subscribe(_ => this.goBack());
  }
  ngOnInit() {
    this.getHero();
  }

}
