import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup1Page } from './signup1.page';

describe('Signup1Page', () => {
  let component: Signup1Page;
  let fixture: ComponentFixture<Signup1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
