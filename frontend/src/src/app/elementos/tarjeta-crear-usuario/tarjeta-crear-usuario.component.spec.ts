import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCrearUsuarioComponent } from './tarjeta-crear-usuario.component';

describe('TarjetaCrearUsuarioComponent', () => {
  let component: TarjetaCrearUsuarioComponent;
  let fixture: ComponentFixture<TarjetaCrearUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCrearUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCrearUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
