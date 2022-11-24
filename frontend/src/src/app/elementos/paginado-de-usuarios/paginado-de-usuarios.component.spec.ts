import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoDeUsuariosComponent } from './paginado-de-usuarios.component';

describe('PaginadoDeUsuariosComponent', () => {
  let component: PaginadoDeUsuariosComponent;
  let fixture: ComponentFixture<PaginadoDeUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadoDeUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadoDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
