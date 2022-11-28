import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFiltroComponent } from './home-filtro.component';

describe('HomeFiltroComponent', () => {
  let component: HomeFiltroComponent;
  let fixture: ComponentFixture<HomeFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
