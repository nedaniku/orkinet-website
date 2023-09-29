import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPlantComponent } from './discount-plant.component';

describe('DiscountPlantComponent', () => {
  let component: DiscountPlantComponent;
  let fixture: ComponentFixture<DiscountPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountPlantComponent]
    });
    fixture = TestBed.createComponent(DiscountPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
