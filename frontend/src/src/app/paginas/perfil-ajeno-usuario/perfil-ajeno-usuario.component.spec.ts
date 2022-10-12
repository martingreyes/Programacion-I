import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAjenoUsuarioComponent } from './perfil-ajeno-usuario.component';

describe('PerfilAjenoUsuarioComponent', () => {
  let component: PerfilAjenoUsuarioComponent;
  let fixture: ComponentFixture<PerfilAjenoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAjenoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAjenoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
