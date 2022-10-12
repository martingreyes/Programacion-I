import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCalificacionesUsuarioComponent } from './tarjeta-calificaciones-usuario.component';

describe('TarjetaCalificacionesUsuarioComponent', () => {
  let component: TarjetaCalificacionesUsuarioComponent;
  let fixture: ComponentFixture<TarjetaCalificacionesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCalificacionesUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCalificacionesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
