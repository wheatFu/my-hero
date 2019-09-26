import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { Heros } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  constructor() {}
  heros = Heros;
  selectedHero: Hero;

  onSelect(hero): void {
    this.selectedHero = hero;
  }
  // 生命周期hook,创建完组件后很快调用的函数，适合放置初始化逻辑
  ngOnInit() { }

}
