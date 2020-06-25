import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoankaPhraseComponent } from './joanka-phrase.component';

describe('JoankaPhraseComponent', () => {
  let component: JoankaPhraseComponent;
  let fixture: ComponentFixture<JoankaPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoankaPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoankaPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
