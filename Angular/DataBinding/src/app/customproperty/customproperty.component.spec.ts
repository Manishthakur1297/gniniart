import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompropertyComponent } from './customproperty.component';

describe('CustompropertyComponent', () => {
  let component: CustompropertyComponent;
  let fixture: ComponentFixture<CustompropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustompropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
