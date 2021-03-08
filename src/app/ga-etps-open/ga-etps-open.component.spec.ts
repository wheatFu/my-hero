import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaEtpsOpenComponent } from './ga-etps-open.component';

describe('GaEtpsOpenComponent', () => {
  let component: GaEtpsOpenComponent;
  let fixture: ComponentFixture<GaEtpsOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaEtpsOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaEtpsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
