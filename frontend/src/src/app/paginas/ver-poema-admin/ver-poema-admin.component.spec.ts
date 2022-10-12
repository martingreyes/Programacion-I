import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPoemaAdminComponent } from './ver-poema-admin.component';

describe('VerPoemaAdminComponent', () => {
  let component: VerPoemaAdminComponent;
  let fixture: ComponentFixture<VerPoemaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPoemaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPoemaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
