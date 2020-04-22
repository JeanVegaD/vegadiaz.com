import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeResumeComponent } from './se-resume.component';

describe('SeResumeComponent', () => {
  let component: SeResumeComponent;
  let fixture: ComponentFixture<SeResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
