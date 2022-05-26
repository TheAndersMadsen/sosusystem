import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryModalComponentHealth } from './subcategory-modal.component-health';

describe('SubcategoryModalComponent', () => {
  let component: SubcategoryModalComponentHealth;
  let fixture: ComponentFixture<SubcategoryModalComponentHealth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryModalComponentHealth ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryModalComponentHealth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
