import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppagePage } from './signuppage.page';

describe('SignuppagePage', () => {
  let component: SignuppagePage;
  let fixture: ComponentFixture<SignuppagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuppagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuppagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
