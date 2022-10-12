import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSinUsuarioComponent } from './menu-sin-usuario.component';

describe('MenuSinUsuarioComponent', () => {
  let component: MenuSinUsuarioComponent;
  let fixture: ComponentFixture<MenuSinUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSinUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSinUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
