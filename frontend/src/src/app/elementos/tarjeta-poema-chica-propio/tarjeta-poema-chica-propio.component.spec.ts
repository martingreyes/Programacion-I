import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPoemaChicaPropioComponent } from './tarjeta-poema-chica-propio.component';

describe('TarjetaPoemaChicaPropioComponent', () => {
  let component: TarjetaPoemaChicaPropioComponent;
  let fixture: ComponentFixture<TarjetaPoemaChicaPropioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPoemaChicaPropioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPoemaChicaPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
