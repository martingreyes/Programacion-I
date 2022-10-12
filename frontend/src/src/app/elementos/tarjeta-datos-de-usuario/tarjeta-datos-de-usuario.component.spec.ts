import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDatosDeUsuarioComponent } from './tarjeta-datos-de-usuario.component';

describe('TarjetaDatosDeUsuarioComponent', () => {
  let component: TarjetaDatosDeUsuarioComponent;
  let fixture: ComponentFixture<TarjetaDatosDeUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDatosDeUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDatosDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
