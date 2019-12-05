import { Component, OnInit } from '@angular/core';
import { MBQDHero } from '../hero';

@Component({
  selector: 'app-form-mbqd',
  templateUrl: './form-mbqd.component.html',
  styleUrls: ['./form-mbqd.component.css']
})
export class FormMbqdComponent implements OnInit {
  constructor() { }
  submitted = false;
  powers = ['Dr WZQ', 'BBQ FFS', 'KZ XHS', 'BBD MLK'];
  bob: string;
  model = new  MBQDHero(12, 'wdc', this.powers[0], 'Chuck Overstreet');
  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }
  newHero() {
    this.model = new MBQDHero(13, '', '');
  }

  skyDog(): MBQDHero {
    const myHero =  new MBQDHero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }

  pick(name: string) {
    this.bob = name;
  }
  ngOnInit() {}
}
