import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConUsuarioComponent } from './menu-con-usuario.component';

describe('MenuConUsuarioComponent', () => {
  let component: MenuConUsuarioComponent;
  let fixture: ComponentFixture<MenuConUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuConUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuConUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
