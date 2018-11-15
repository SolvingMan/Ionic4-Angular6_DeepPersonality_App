import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokepermissionPage } from './revokepermission.page';

describe('RevokepermissionPage', () => {
  let component: RevokepermissionPage;
  let fixture: ComponentFixture<RevokepermissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevokepermissionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevokepermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
