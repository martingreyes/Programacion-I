import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosFiltroComponent } from './lista-usuarios-filtro.component';

describe('ListaUsuariosFiltroComponent', () => {
  let component: ListaUsuariosFiltroComponent;
  let fixture: ComponentFixture<ListaUsuariosFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuariosFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUsuariosFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
