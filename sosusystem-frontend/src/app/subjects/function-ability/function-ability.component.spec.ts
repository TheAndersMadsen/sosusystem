import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAbilityComponent } from './function-ability.component';

describe('FunctionAbilityComponent', () => {
  let component: FunctionAbilityComponent;
  let fixture: ComponentFixture<FunctionAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionAbilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
