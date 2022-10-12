import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPoemaUsuarioComponent } from './ver-poema-usuario.component';

describe('VerPoemaUsuarioComponent', () => {
  let component: VerPoemaUsuarioComponent;
  let fixture: ComponentFixture<VerPoemaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPoemaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPoemaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
