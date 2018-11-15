import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPage } from './question.page';

describe('QuestionPage', () => {
  let component: QuestionPage;
  let fixture: ComponentFixture<QuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
