import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFlowerComponent } from './discount-flower.component';

describe('DiscountFlowerComponent', () => {
  let component: DiscountFlowerComponent;
  let fixture: ComponentFixture<DiscountFlowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountFlowerComponent]
    });
    fixture = TestBed.createComponent(DiscountFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
