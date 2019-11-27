import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBoosterComponent } from './power-booster.component';

describe('PowerBoosterComponent', () => {
  let component: PowerBoosterComponent;
  let fixture: ComponentFixture<PowerBoosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBoosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
