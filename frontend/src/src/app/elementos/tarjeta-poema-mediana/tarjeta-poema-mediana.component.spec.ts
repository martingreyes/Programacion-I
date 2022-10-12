import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPoemaMedianaComponent } from './tarjeta-poema-mediana.component';

describe('TarjetaPoemaMedianaComponent', () => {
  let component: TarjetaPoemaMedianaComponent;
  let fixture: ComponentFixture<TarjetaPoemaMedianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPoemaMedianaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPoemaMedianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
