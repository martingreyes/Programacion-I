import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCalificacionesComponent } from './tarjeta-calificaciones.component';

describe('TarjetaCalificacionesComponent', () => {
  let component: TarjetaCalificacionesComponent;
  let fixture: ComponentFixture<TarjetaCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
