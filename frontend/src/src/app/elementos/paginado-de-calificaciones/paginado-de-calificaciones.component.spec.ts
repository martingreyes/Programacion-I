import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoDeCalificacionesComponent } from './paginado-de-calificaciones.component';

describe('PaginadoDeCalificacionesComponent', () => {
  let component: PaginadoDeCalificacionesComponent;
  let fixture: ComponentFixture<PaginadoDeCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadoDeCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadoDeCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
