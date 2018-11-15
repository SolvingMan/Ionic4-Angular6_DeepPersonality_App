import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpagePage } from './loginpage.page';

describe('LoginpagePage', () => {
  let component: LoginpagePage;
  let fixture: ComponentFixture<LoginpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
