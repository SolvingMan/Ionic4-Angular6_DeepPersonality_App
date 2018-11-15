import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpermissionPage } from './addpermission.page';

describe('AddpermissionPage', () => {
  let component: AddpermissionPage;
  let fixture: ComponentFixture<AddpermissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpermissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
