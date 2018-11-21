import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsPage } from './demographics.page';

describe('DemographicsPage', () => {
  let component: DemographicsPage;
  let fixture: ComponentFixture<DemographicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
