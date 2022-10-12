import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulaPoemaComponent } from './capsula-poema.component';

describe('CapsulaPoemaComponent', () => {
  let component: CapsulaPoemaComponent;
  let fixture: ComponentFixture<CapsulaPoemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsulaPoemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsulaPoemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
