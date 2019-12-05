import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMbqdComponent } from './form-mbqd.component';

describe('FormMbqdComponent', () => {
  let component: FormMbqdComponent;
  let fixture: ComponentFixture<FormMbqdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMbqdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMbqdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
