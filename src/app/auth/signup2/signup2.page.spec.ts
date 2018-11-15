import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup2Page } from './signup2.page';

describe('Signup2Page', () => {
  let component: Signup2Page;
  let fixture: ComponentFixture<Signup2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signup2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signup2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
