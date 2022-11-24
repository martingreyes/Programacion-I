import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaActualizarPoemaComponent } from './tarjeta-actualizar-poema.component';

describe('TarjetaActualizarPoemaComponent', () => {
  let component: TarjetaActualizarPoemaComponent;
  let fixture: ComponentFixture<TarjetaActualizarPoemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaActualizarPoemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaActualizarPoemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
