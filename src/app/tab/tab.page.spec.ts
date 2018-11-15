import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPage } from './tab.page';

describe('TabPage', () => {
  let component: TabPage;
  let fixture: ComponentFixture<TabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
