import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadoDePoemasComponent } from './paginado-de-poemas.component';

describe('PaginadoDePoemasComponent', () => {
  let component: PaginadoDePoemasComponent;
  let fixture: ComponentFixture<PaginadoDePoemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadoDePoemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadoDePoemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
