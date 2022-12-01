import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosEmprendimientosComponent } from './todos-emprendimientos.component';

describe('TodosEmprendimientosComponent', () => {
  let component: TodosEmprendimientosComponent;
  let fixture: ComponentFixture<TodosEmprendimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosEmprendimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosEmprendimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
