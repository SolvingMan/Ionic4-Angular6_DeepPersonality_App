import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsPage } from './permissions.page';

describe('PermissionsPage', () => {
  let component: PermissionsPage;
  let fixture: ComponentFixture<PermissionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
