import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAjenoAdminComponent } from './perfil-ajeno-admin.component';

describe('PerfilAjenoAdminComponent', () => {
  let component: PerfilAjenoAdminComponent;
  let fixture: ComponentFixture<PerfilAjenoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAjenoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAjenoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
