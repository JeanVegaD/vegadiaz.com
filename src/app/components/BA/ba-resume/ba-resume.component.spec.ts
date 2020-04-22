import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaResumeComponent } from './ba-resume.component';

describe('BaResumeComponent', () => {
  let component: BaResumeComponent;
  let fixture: ComponentFixture<BaResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
