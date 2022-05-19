import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenFunctionAbilityComponent } from './citizen-function-ability.component';

describe('CitizenFuntionAbilityComponent', () => {
  let component: CitizenFunctionAbilityComponent;
  let fixture: ComponentFixture<CitizenFunctionAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenFunctionAbilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenFunctionAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
