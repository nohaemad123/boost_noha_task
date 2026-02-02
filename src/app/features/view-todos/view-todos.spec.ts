import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodos } from './view-todos';

describe('ViewTodos', () => {
  let component: ViewTodos;
  let fixture: ComponentFixture<ViewTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTodos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
