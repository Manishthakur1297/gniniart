import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollNumberComponent } from './roll-number.component';

describe('RollNumberComponent', () => {
  let component: RollNumberComponent;
  let fixture: ComponentFixture<RollNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
