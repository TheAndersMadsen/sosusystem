import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryModalFunctionComponent } from './subcategory-modal-function.component';

describe('SubcategoryModalFunctionComponent', () => {
  let component: SubcategoryModalFunctionComponent;
  let fixture: ComponentFixture<SubcategoryModalFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryModalFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryModalFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
