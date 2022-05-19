import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenNavModalComponent } from './citizen-nav-modal.component';

describe('CitizenNavModalComponent', () => {
  let component: CitizenNavModalComponent;
  let fixture: ComponentFixture<CitizenNavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenNavModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenNavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
