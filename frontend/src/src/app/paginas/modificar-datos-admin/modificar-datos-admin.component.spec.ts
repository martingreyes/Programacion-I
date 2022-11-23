import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosAdminComponent } from './modificar-datos-admin.component';

describe('ModificarDatosAdminComponent', () => {
  let component: ModificarDatosAdminComponent;
  let fixture: ComponentFixture<ModificarDatosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarDatosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
