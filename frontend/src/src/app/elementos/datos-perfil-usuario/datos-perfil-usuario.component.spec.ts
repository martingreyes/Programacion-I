import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPerfilUsuarioComponent } from './datos-perfil-usuario.component';

describe('DatosPerfilUsuarioComponent', () => {
  let component: DatosPerfilUsuarioComponent;
  let fixture: ComponentFixture<DatosPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
