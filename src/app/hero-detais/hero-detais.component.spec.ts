import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetaisComponent } from './hero-detais.component';

describe('HeroDetaisComponent', () => {
  let component: HeroDetaisComponent;
  let fixture: ComponentFixture<HeroDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
