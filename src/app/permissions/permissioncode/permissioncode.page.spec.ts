import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissioncodePage } from './permissioncode.page';

describe('PermissioncodePage', () => {
  let component: PermissioncodePage;
  let fixture: ComponentFixture<PermissioncodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissioncodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissioncodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
