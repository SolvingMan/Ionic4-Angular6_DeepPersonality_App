import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerPage } from './answer.page';

describe('AnswerPage', () => {
  let component: AnswerPage;
  let fixture: ComponentFixture<AnswerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
