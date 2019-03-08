import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingdemoComponent } from './testingdemo.component';

describe('TestingdemoComponent', () => {
  let component: TestingdemoComponent;
  let fixture: ComponentFixture<TestingdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
