import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenGeneralInfoComponent } from './citizen-general-info.component';

describe('CitizenGeneralInfoComponent', () => {
  let component: CitizenGeneralInfoComponent;
  let fixture: ComponentFixture<CitizenGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
