import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaCargarArchivoComponent } from './ventana-cargar-archivo.component';

describe('VentanaCargarArchivoComponent', () => {
  let component: VentanaCargarArchivoComponent;
  let fixture: ComponentFixture<VentanaCargarArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaCargarArchivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaCargarArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
