import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductSkeleton } from './single-product-skeleton';

describe('SingleProductSkeleton', () => {
  let component: SingleProductSkeleton;
  let fixture: ComponentFixture<SingleProductSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
