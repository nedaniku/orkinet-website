import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantCategoryComponent } from './plant-category.component';

describe('PlantCategoryComponent', () => {
  let component: PlantCategoryComponent;
  let fixture: ComponentFixture<PlantCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantCategoryComponent]
    });
    fixture = TestBed.createComponent(PlantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
