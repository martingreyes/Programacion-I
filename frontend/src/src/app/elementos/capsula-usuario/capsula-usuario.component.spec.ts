import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulaUsuarioComponent } from './capsula-usuario.component';

describe('CapsulaUsuarioComponent', () => {
  let component: CapsulaUsuarioComponent;
  let fixture: ComponentFixture<CapsulaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsulaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
