import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPoemaGrandeComponent } from './tarjeta-poema-grande.component';

describe('TarjetaPoemaGrandeComponent', () => {
  let component: TarjetaPoemaGrandeComponent;
  let fixture: ComponentFixture<TarjetaPoemaGrandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPoemaGrandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPoemaGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
