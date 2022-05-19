import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenHealthConditionsComponent } from './citizen-health-conditions.component';

describe('CitizenHealthConditionsComponent', () => {
  let component: CitizenHealthConditionsComponent;
  let fixture: ComponentFixture<CitizenHealthConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenHealthConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenHealthConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
