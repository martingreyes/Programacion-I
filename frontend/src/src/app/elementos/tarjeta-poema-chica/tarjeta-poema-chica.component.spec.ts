import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPoemaChicaComponent } from './tarjeta-poema-chica.component';

describe('TarjetaPoemaChicaComponent', () => {
  let component: TarjetaPoemaChicaComponent;
  let fixture: ComponentFixture<TarjetaPoemaChicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPoemaChicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPoemaChicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
