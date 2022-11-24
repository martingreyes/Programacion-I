import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPoemaComponent } from './actualizar-poema.component';

describe('ActualizarPoemaComponent', () => {
  let component: ActualizarPoemaComponent;
  let fixture: ComponentFixture<ActualizarPoemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarPoemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPoemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
