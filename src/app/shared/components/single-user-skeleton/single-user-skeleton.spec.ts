import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserSkeleton } from './single-user-skeleton';

describe('SingleUserSkeleton', () => {
  let component: SingleUserSkeleton;
  let fixture: ComponentFixture<SingleUserSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleUserSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
