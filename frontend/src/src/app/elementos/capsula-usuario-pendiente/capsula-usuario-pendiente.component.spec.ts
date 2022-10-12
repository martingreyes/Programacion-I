import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulaUsuarioPendienteComponent } from './capsula-usuario-pendiente.component';

describe('CapsulaUsuarioPendienteComponent', () => {
  let component: CapsulaUsuarioPendienteComponent;
  let fixture: ComponentFixture<CapsulaUsuarioPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulaUsuarioPendienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsulaUsuarioPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
