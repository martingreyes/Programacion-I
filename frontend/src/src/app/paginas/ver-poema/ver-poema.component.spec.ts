import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPoemaComponent } from './ver-poema.component';

describe('VerPoemaComponent', () => {
  let component: VerPoemaComponent;
  let fixture: ComponentFixture<VerPoemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPoemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPoemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
