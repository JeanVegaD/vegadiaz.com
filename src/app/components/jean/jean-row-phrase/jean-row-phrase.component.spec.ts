import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanRowPhraseComponent } from './jean-row-phrase.component';

describe('JeanRowPhraseComponent', () => {
  let component: JeanRowPhraseComponent;
  let fixture: ComponentFixture<JeanRowPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeanRowPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeanRowPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
