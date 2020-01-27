import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuginfoComponent } from './buginfo.component';

describe('BuginfoComponent', () => {
  let component: BuginfoComponent;
  let fixture: ComponentFixture<BuginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
