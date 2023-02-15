import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmprendimientoComponent } from './ver-emprendimiento.component';

describe('VerEmprendimientoComponent', () => {
  let component: VerEmprendimientoComponent;
  let fixture: ComponentFixture<VerEmprendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEmprendimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
