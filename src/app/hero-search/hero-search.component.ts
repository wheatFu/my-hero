import { Observable, Subject } from 'rxjs';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heros$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private heroService: HeroService,
  ) { }

  search(query: string): void {
    this.searchTerms.next(query);
  }

  ngOnInit() {
    this.heros$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => this.heroService.searchHero(query))
    );
  }

}
