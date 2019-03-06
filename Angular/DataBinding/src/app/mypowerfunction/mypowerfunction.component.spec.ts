import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypowerfunctionComponent } from './mypowerfunction.component';

describe('MypowerfunctionComponent', () => {
  let component: MypowerfunctionComponent;
  let fixture: ComponentFixture<MypowerfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypowerfunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypowerfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
