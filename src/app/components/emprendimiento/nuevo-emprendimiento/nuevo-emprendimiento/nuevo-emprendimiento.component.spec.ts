import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEmprendimientoComponent } from './nuevo-emprendimiento.component';

describe('NuevoEmprendimientoComponent', () => {
  let component: NuevoEmprendimientoComponent;
  let fixture: ComponentFixture<NuevoEmprendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEmprendimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
