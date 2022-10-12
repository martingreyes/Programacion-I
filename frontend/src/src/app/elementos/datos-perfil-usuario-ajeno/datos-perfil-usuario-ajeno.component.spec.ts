import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPerfilUsuarioAjenoComponent } from './datos-perfil-usuario-ajeno.component';

describe('DatosPerfilUsuarioAjenoComponent', () => {
  let component: DatosPerfilUsuarioAjenoComponent;
  let fixture: ComponentFixture<DatosPerfilUsuarioAjenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPerfilUsuarioAjenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPerfilUsuarioAjenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
