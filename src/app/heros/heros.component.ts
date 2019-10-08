import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero} from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros: Hero [];
  constructor(
    private heroService: HeroService
  ) { }
  getHeros(): void {
    this.heroService.getHeros()
    .subscribe((heroes) => {
      this.heros = heroes;
    });
  }
  add(name: string): void {
    if (!name) {return; }
    this.heroService.addHero({name} as Hero)
    .subscribe(hero => this.heros.push(hero));
  }
  delete(hero: Hero): void {
    
  }

  // 生命周期hook,创建完组件后很快调用的函数，适合放置初始化逻辑
  ngOnInit() {
    this.getHeros();
   }

}
