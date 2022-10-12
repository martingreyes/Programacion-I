import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListaComponent } from './perfil-lista.component';

describe('PerfilListaComponent', () => {
  let component: PerfilListaComponent;
  let fixture: ComponentFixture<PerfilListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
