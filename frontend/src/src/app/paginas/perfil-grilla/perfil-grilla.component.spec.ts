import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGrillaComponent } from './perfil-grilla.component';

describe('PerfilGrillaComponent', () => {
  let component: PerfilGrillaComponent;
  let fixture: ComponentFixture<PerfilGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilGrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
