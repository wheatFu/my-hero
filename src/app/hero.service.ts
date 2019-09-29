import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heros } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private msgService: MessageService,
  ) { }

  getHeros(): Observable<Hero[]> {
    this.msgService.add('HeroService: fethced Heros');
    return of(Heros);
  }
}
