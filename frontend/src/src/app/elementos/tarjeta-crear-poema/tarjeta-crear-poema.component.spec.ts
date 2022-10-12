import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCrearPoemaComponent } from './tarjeta-crear-poema.component';

describe('TarjetaCrearPoemaComponent', () => {
  let component: TarjetaCrearPoemaComponent;
  let fixture: ComponentFixture<TarjetaCrearPoemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCrearPoemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaCrearPoemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
