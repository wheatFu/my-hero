import { Component, OnInit, Input, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detais',
  templateUrl: './hero-detais.component.html',
  styleUrls: ['./hero-detais.component.css']
})
export class HeroDetaisComponent implements OnInit {
  @Input() hero: Hero[];

  constructor() { }
  ngOnInit() { }

}
